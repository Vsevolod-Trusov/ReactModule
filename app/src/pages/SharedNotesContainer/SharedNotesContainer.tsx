import React, { FC, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components/index';
import { ROUTE } from 'config/constants/routes';
import { useGetSharedNotes } from 'api/notes';
import { selectFirstName } from 'store/slices/user.slice';
import { setSelectedNote, setShared } from 'store/slices/notes.slice';

import {
  StyledButton,
  StyledInfinityScrollWrapper,
  StyledNoteListWrapper,
  StyledOutletWrapper,
} from '../NoteList/styled';
import { TNote } from '../NoteList/types';
import { BUTTON_TEXT } from '../NoteList/constants';
import CircularProgress from '@mui/material/CircularProgress';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: sharedNotes, isLoading } = useGetSharedNotes();

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    dispatch(setSelectedNote(item));
    navigate(ROUTE.SELECTED_SHARE);
  };

  const handleNavigateToCreate = () => {
    navigate(ROUTE.SHARED_FORM);
  };

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }

  useEffect(() => {
    if (sharedNotes) dispatch(setShared(sharedNotes));
  }, sharedNotes);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <StyledNoteListWrapper>
      <Box>
        <FilterNotes isShared={true} />
        <StyledButton
          type='button'
          variant={'contained'}
          onClick={handleNavigateToCreate}
        >
          {BUTTON_TEXT}
        </StyledButton>
        <StyledInfinityScrollWrapper>
          <InfinityScroll
            isShared={true}
            handleSetSelectedNote={handleSelectNode}
          />
        </StyledInfinityScrollWrapper>
      </Box>
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledNoteListWrapper>
  );
};

export default SharedNotesContainer;
