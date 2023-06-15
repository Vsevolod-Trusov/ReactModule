import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

import { InfinityScroll, FilterNotes } from 'components/index';

import { TNoteListProps } from './types';
import {
  StyledNoteListWrapper,
  StyledOutletWrapper,
  StyledInfinityScrollWrapper,
  StyledButton,
} from './styled';
import { BUTTON_TEXT } from './constants';

const NoteList: FC<TNoteListProps> = ({
  handleSetSelectedNote,
  handleNavigateToCreate,
}) => {
  return (
    <StyledNoteListWrapper>
      <Box>
        <FilterNotes isShared={false} />
        <StyledButton
          type='button'
          variant={'contained'}
          onClick={handleNavigateToCreate}
        >
          {BUTTON_TEXT}
        </StyledButton>
        <StyledInfinityScrollWrapper>
          <InfinityScroll
            isShared={false}
            handleSetSelectedNote={handleSetSelectedNote}
          />
        </StyledInfinityScrollWrapper>
      </Box>
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledNoteListWrapper>
  );
};

export default NoteList;
