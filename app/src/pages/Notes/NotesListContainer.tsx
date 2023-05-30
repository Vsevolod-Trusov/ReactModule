import React, { FC, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE } from 'config/routes/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import { selectNotes, setReduxNotes } from 'config/redux/slices/notes.slice';
import { QUERY_KEYS } from 'pages/constants';

import { INITIAL_STATE, NODES } from './constants';
import NoteList from './NoteList';
import { TNote } from './types';
import { selectFirstName } from '../../config/redux/slices/user.slice';

const NotesListContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: async () => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
      method: FETCH_METHODS.GET,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      cache: 'no-cache',
    })),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxNotes = useSelector(selectNotes);
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
        dispatch(setReduxNotes({ notes: NODES }));

        return;
      }

      localStorage.setItem('notes', JSON.stringify(notes));
      dispatch(setReduxNotes({ notes: notes }));
    }

  };

  const setNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
      dispatch(setReduxNotes({ notes: JSON.parse(savedNotes) }));
    }
  };

  useEffect(() => {
    setNotesInLocalStorage();
  }, []);


  useEffect(() => {
    setNotesFromLocalStorage();
  }, []);

  return (
    <NoteList note={note}
              notes={reduxNotes.filter((item: TNote) => item.author === firstname)}
              handleSetSelectedNote={handleSelectNode}
    />
  );
};

export default NotesListContainer;
