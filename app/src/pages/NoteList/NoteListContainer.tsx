import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';
import { useGetNotes } from 'api/notes';

import { TNote } from './types';
import NoteList from './NoteList';

const NoteListContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const navigate = useNavigate();

  useGetNotes();

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
