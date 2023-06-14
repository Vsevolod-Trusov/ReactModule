import React, { FC } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components/index';
import { ROUTE } from 'config/constants/routes';
import { useGetSharedNotes } from 'api/notes';
import { selectFirstName } from 'store/slices/user.slice';
import { setSelectedNote } from 'store/slices/notes.slice';

import {
  StyledInfinityScrollWrapper,
  StyledNoteListWrapper,
  StyledOutletWrapper,
} from '../NoteList/styled';
import { TNote } from '../NoteList/types';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem('selected', JSON.stringify(item));
    dispatch(setSelectedNote(item));
    navigate(ROUTE.SELECTED_SHARE);
  };

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }

  useGetSharedNotes();

  return (
    <StyledNoteListWrapper>
      <Box>
        <FilterNotes isShared={true} />
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
