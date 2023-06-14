import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';
import { setSelectedNote } from 'store/slices/notes.slice';
import { useGetNotes } from 'api/notes';

import { TNote } from './types';
import NoteList from './NoteList';

const NoteListContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useGetNotes();

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    dispatch(setSelectedNote(item));
    navigate(ROUTE.SELECTED_NOTE);
  };

  return <NoteList handleSetSelectedNote={handleSelectNode} />;
};

export default NoteListContainer;
