import React, { FC } from 'react';
import Box from '@mui/material/Box/Box';

import NotesLayoutContainer from './components/NotesLayout/index';
import InfinityScrollContainer from 'components/InfinityScroll';

import { SELECT_NODE } from './components/SelectedNote/constants';
import { StyledSelectedNode } from './components/SelectedNote/styled';
import { TNoteListProps } from './types';

const NoteList: FC<TNoteListProps> = ({ notes, handleSetSelectedNote }) => {

  return (
    <Box>
      <StyledSelectedNode>
        <Box>
          {SELECT_NODE}
        </Box>
      </StyledSelectedNode>


      <InfinityScrollContainer
        notes={notes}
        handleSetSelectedNote={handleSetSelectedNote}
      />

    </Box>
  );
};

export default NoteList;
