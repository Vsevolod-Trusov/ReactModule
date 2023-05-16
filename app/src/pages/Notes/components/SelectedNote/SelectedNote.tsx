import React from 'react';
import Box from '@mui/material/Box/Box';

import { TSelectedNode } from './types';
import { StyledEditWrapper, StyledSelectedNode } from './styled';
import { SELECT_NODE } from './constants';
import EditNoteContainer from './components/EditNoteForm/index';

const SelectedNote = ({ note, setNotes, notes }: TSelectedNode) => {

  return (
    <StyledSelectedNode>
      {note.id ? (
            <StyledEditWrapper>
              <EditNoteContainer  note={note}
                            setNotes={setNotes}
                            notes={notes}
              />
            </StyledEditWrapper>)
        :
        <Box>
          {SELECT_NODE}
        </Box>
      }
    </StyledSelectedNode>
  );
};

export default SelectedNote;
