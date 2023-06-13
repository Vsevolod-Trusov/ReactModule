import React, { FC } from 'react';
import Box from '@mui/material/Box';

import { InfinityScroll, FilterNotes } from 'components/index';

import { TNoteListProps } from './types';

const NoteList: FC<TNoteListProps> = ({ handleSetSelectedNote }) => {
  return (
    <Box>
      <FilterNotes isShared={false} />
      <InfinityScroll
        isShared={false}
        handleSetSelectedNote={handleSetSelectedNote}
      />
    </Box>
  );
};

export default NoteList;
