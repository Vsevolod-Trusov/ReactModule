import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE } from 'config/constants/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'api/constants';
import { setReduxNotes } from 'store/slices/notes.slice';
import { selectFirstName } from 'store/slices/user.slice';
import { QUERY_KEYS } from 'pages/constants';

import { TNote } from './types';
import NoteList from './NoteList';

const NoteListContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: async () =>
      await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
        method: FETCH_METHODS.GET,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        cache: 'no-store',
      }),
    onSuccess: async (data) => {
      const notes = await data.json();
      dispatch(
        setReduxNotes(notes.filter((item: TNote) => item.author === firstname)),
      );
    },
  });

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    navigate(ROUTE.NOTE);
  };

  return <NoteList handleSetSelectedNote={handleSelectNode} />;
};

export default NoteListContainer;
