import React, { FC, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';
import { setReduxNotes, setSelectedNote } from 'store/slices/notes.slice';
import { useGetNotes } from 'api/notes';

import { TNote } from './types';
import NoteList from './NoteList';

const NoteListContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetNotes();

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }
  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    dispatch(setSelectedNote(item));
    navigate(ROUTE.SELECTED_NOTE);
  };

  const handleNavigateToCreate = () => {
    navigate(ROUTE.NOTES_FORM);
  };

  useEffect(() => {
    if (data) {
      dispatch(setReduxNotes(data));
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <NoteList
      handleSetSelectedNote={handleSelectNode}
      handleNavigateToCreate={handleNavigateToCreate}
    />
  );
};

export default NoteListContainer;
