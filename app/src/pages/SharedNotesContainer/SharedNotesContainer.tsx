import { FC } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components';
import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';
import { setSelectedNote } from 'store/slices/notes.slice';

import {
  StyledCreateButton,
  StyledInfinityScrollWrapper,
  StyledNoteListWrapper,
  StyledOutletWrapper,
} from '../NoteList/styled';
import { TNote } from '../NoteList/types';
import { BUTTON_TEXT } from '../NoteList/constants';
import { LOCAL_STARAGE_NAMES } from 'config/globalConstants';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNotUserAuthorized =
    !JSON.parse(window.localStorage.getItem(LOCAL_STARAGE_NAMES.EMAIL)) ||
    !firstname;

  const handleSelectNode = (item: TNote) => {
    window.localStorage.setItem(
      LOCAL_STARAGE_NAMES.SELECTED,
      JSON.stringify(item),
    );
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
          <StyledCreateButton
            type='button'
            variant={'contained'}
            onClick={handleNavigateToCreate}
          >
            {BUTTON_TEXT}
          </StyledCreateButton>
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
    return <Navigate to={ROUTE.SIGN_IN} />;
  }
};

export default SharedNotesContainer;
