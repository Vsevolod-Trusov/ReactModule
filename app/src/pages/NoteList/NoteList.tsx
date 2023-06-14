import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import { InfinityScroll, FilterNotes } from 'components/index';

import { TNoteListProps } from './types';
import {
  StyledNoteListWrapper,
  StyledOutletWrapper,
  StyledInfinityScrollWrapper,
} from './styled';

const NoteList: FC<TNoteListProps> = ({ handleSetSelectedNote }) => {
  return (
    <StyledNoteListWrapper>
      <Box>
        <FilterNotes isShared={false} />
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
