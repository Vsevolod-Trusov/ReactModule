import React, { FC } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components';
import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';
import { setSelectedNote } from 'store/slices/notes.slice';

import {
  StyledButton,
  StyledInfinityScrollWrapper,
  StyledNoteListWrapper,
  StyledOutletWrapper,
} from '../NoteList/styled';
import { TNote } from '../NoteList/types';
import { BUTTON_TEXT } from '../NoteList/constants';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNotUserAuthorized =
    !window.localStorage.getItem('email') || !firstname;

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    dispatch(setSelectedNote(item));
    navigate(ROUTE.SELECTED_SHARE);
  };

  const handleNavigateToCreate = () => {
    navigate(ROUTE.SHARED_FORM);
  };

  if (!isNotUserAuthorized) {
    return (
      <StyledNoteListWrapper>
        <Box>
          <FilterNotes isShared={true} />
          <FilterNotes isShared={true} filterByName={true} />
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
  }

  if (isNotUserAuthorized) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }
};

export default SharedNotesContainer;
