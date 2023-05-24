import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import {TNote, TUpdateNote} from 'pages/Notes/types';
import {ROUTE} from "config/routes/routes";
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';

import {IEditNodeProps, IHandleEditNote} from './types';
import EditNoteForm from './EditNoteForm';

const EditNoteContainer: FC<IEditNodeProps> = () => {

    const navigate = useNavigate()

    const note = localStorage.getItem('selected') || undefined
    const selectedNote: TNote = note ? JSON.parse(note) : undefined
    const savedNotes = localStorage.getItem('notes');
    const notes = savedNotes ? JSON.parse(savedNotes) : []

    const [description, setDescription] = useState<string>(selectedNote ? selectedNote?.description : '');

    const mutation = useMutation({
        mutationFn: async (updatedNode: TUpdateNote) => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}/${selectedNote.id}`, {
            method: FETCH_METHODS.PUT,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedNode),
        })),
    })

    const handleEditNote = ({description}: IHandleEditNote) => {

        const selectedNoteIndex = notes.findIndex((item: TNote) => item.id === selectedNote.id)

        const updatedNote = {
            ...notes[selectedNoteIndex],
            description: description,
        };

        const updatedNotes = [...notes];
        updatedNotes[selectedNoteIndex] = updatedNote;

        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        mutation.mutate({
            description: description
        });
        navigate(ROUTE.NOTES)
    };

    const handleShareNote = () => {
        mutation.mutate({
            isShared: true
        });
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
            handleShareNote={handleShareNote}
        />
    );
};

export default EditNoteContainer
