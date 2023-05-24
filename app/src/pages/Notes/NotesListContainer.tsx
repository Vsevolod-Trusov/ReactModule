import React, { FC, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ROUTE } from 'config/routes/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';

import { INITIAL_STATE, NODES } from './constants';
import NoteList from './NoteList';
import { TNote } from './types';

const NotesListContainer: FC = () => {

  const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
      method: FETCH_METHODS.GET,
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache',
    })),
  });
  const navigate = useNavigate();
  const [notes, setNotes] = useState<TNote[]>([]);
  const note: TNote = INITIAL_STATE;

  if (!window.localStorage.getItem('email')) {
    return <Navigate to={ROUTE.NOT_FOUND} />;
  }

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    navigate(ROUTE.NOTE);
  };

  const setNotesInLocalStorage = async () => {
    const savedNotes = localStorage.getItem('notes');

    if (!savedNotes) {

      const notes = await data?.json();

      if (!notes) {
        localStorage.setItem('notes', JSON.stringify(NODES));

        return;
      }

      localStorage.setItem('notes', JSON.stringify(NODES));
    }
  };

  const setNotesFromLocalStorage = (setNotes: React.Dispatch<React.SetStateAction<TNote[]>>) => {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  };

  useEffect(() => {
    setNotesInLocalStorage();
    setNotesFromLocalStorage(setNotes);
  }, []);

  return (
    <NoteList note={note}
              notes={notes}
              handleSetSelectedNote={handleSelectNode}
    />
  );
};

export default NotesListContainer;
