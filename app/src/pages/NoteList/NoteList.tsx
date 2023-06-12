import React, { FC } from 'react';
import Box from '@mui/material/Box';

import InfinityScrollContainer from 'components/InfinityScroll';

import { TNoteListProps } from './types';
import FilterNotesContainer from 'components/FilterNotes';

const NoteList: FC<TNoteListProps> = ({ handleSetSelectedNote }) => {
  return (
    <Box>
      <FilterNotesContainer isShared={false} />
      <InfinityScrollContainer
        isShared={false}
        handleSetSelectedNote={handleSetSelectedNote}
      />
    </Box>
  );
};

export default NoteList;
