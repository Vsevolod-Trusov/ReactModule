import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { QUERY_KEYS } from 'pages/constants';
import { TNote, TUpdateNote } from 'pages/NoteList/types';
import { ROUTE } from 'config/constants/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'api/constants';
import { selectNotes, setReduxNotes } from 'store/slices/notes.slice';

import { IEditNodeProps, IHandleEditNote } from './types';
import EditNoteForm from './EditNoteForm';

const EditNoteContainer: FC<IEditNodeProps> = () => {
  const navigate = useNavigate();

  const note = localStorage.getItem('selected') || undefined;
  const selectedNote: TNote = note ? JSON.parse(note) : undefined;
  const savedNotes: TNote[] = useSelector(selectNotes);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [description, setDescription] = useState<string>(
    selectedNote ? selectedNote?.description : '',
  );

  const mutation = useMutation({
    mutationFn: async (updatedNode: TUpdateNote) =>
      await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}/${selectedNote.id}`, {
        method: FETCH_METHODS.PUT,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedNode),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
      navigate(ROUTE.NOTES);
    },
  });

  const handleEditNote = ({ description }: IHandleEditNote) => {
    const selectedNoteIndex = savedNotes.findIndex(
      (item: TNote) => item.id === selectedNote.id,
    );
    const updatedNotes = [...savedNotes];
    const note = { ...savedNotes[selectedNoteIndex] };

    note.description = description;

    updatedNotes[selectedNoteIndex] = note;

    dispatch(setReduxNotes(updatedNotes));

    mutation.mutate({
      description: description,
    });
  };

  const handleShareNote = () => {
    mutation.mutate({
      isShared: true,
    });
    navigate(ROUTE.NOTES);
  };

  const handleSetDescription = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDescription(target.value);
  };

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

export default EditNoteContainer;
