import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {TNode} from 'pages/Notes/types';
import {ROUTE} from "config/routes/routes";

import {IEditNodeProps, IHandleEditNote} from './types';
import EditNoteForm from './EditNoteForm';

const EditNoteContainer: FC<IEditNodeProps> = () => {

    const navigate = useNavigate()

    const note = localStorage.getItem('selected') || undefined
    const selectedNote: TNode = note ? JSON.parse(note) : undefined
    const savedNotes = localStorage.getItem('notes');
    const notes = savedNotes ? JSON.parse(savedNotes) : []

    const [description, setDescription] = useState<string>(selectedNote ? selectedNote?.description : '');

    const handleEditNote = ({description}: IHandleEditNote) => {

        const selectedNoteIndex = notes.findIndex((item: TNode) => item.id === selectedNote.id)

        const updatedNote = {
            ...notes[selectedNoteIndex],
            description: description,
        };

        const updatedNotes = [...notes];
        updatedNotes[selectedNoteIndex] = updatedNote;

        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        navigate(ROUTE.NOTES)
    };


    const handleSetDescription = ({target}: ChangeEvent<HTMLInputElement>) => {
        setDescription(target.value)
    }

    useEffect(() => {
        setDescription(selectedNote.description);
    }, [selectedNote.description]);

    return (
        <EditNoteForm
            note={selectedNote}
            description={description}
            handleEditNote={handleEditNote}
            handleSetDescription={handleSetDescription}
        />
    );
};

export default EditNoteContainer
