import React, {useEffect, useState} from 'react';

import NoteList from './NoteList';
import {TNode} from './types';
import {INITIAL_STATE, NODES} from './constants';
import {useNavigate} from 'react-router-dom';
import { ROUTE } from '../../config/routes/routes';

const NotesListContainer = () => {

    const navigate = useNavigate()
    const [notes, setNotes] = useState<TNode[]>([]);
    const note: TNode = INITIAL_STATE

    const handleSelectNode = (item: TNode) => {
        window.localStorage.setItem('selected', JSON.stringify(item))
        navigate(ROUTE.NOTE)
    }

    const setNotesInLocalStorage = () => {
        const savedNotes = localStorage.getItem('notes');

        if (!savedNotes)
            localStorage.setItem('notes', JSON.stringify(NODES));
    }

    const setNotesFromLocalStorage = (setNotes: React.Dispatch<React.SetStateAction<TNode[]>>) => {
        const savedNotes = localStorage.getItem('notes');

        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }

    useEffect(() => {
        setNotesInLocalStorage();
        setNotesFromLocalStorage(setNotes);
    }, []);

    return (
        <NoteList note={note}
                  notes={notes}
                  handleSetSelectedNote={handleSelectNode}
        />
    )
}

export default NotesListContainer
