import React, { FC } from 'react';
import Box from '@mui/material/Box';

import { TNote } from 'pages/Notes/types';
import { EMPTY_LINE, SLICE_POSITION } from 'pages/Notes/constants';
import { sliceText } from 'utils/formatText';
import { formatDate } from 'utils/formatDate';

import { INodesLayout } from './types';
import { StyledNotesLayout, StyledNote, StyledOutputLine } from './styled';

const NotesLayoutContainer: FC<INodesLayout> = ({ notes, handleSetSelectedNote }) => {
  /*   const handleIsSelected = (item: TNote, title: string) => (
     {
       ...currentItemWrapper,
       boxShadow: `0 10px 15px -3px ${isSelected(item.title, title) ?
         SELECTED_NODE_SHADOW :
         DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
     })*/

  return (
    <StyledNotesLayout>
      {
        notes.map((item: TNote) => (
          <StyledNote key={item.id}
               onClick={() => handleSetSelectedNote && handleSetSelectedNote(item)}
          >
            <Box>
              Title: {item.title}
            </Box>

            <StyledOutputLine>
              {
                sliceText(item.description, SLICE_POSITION)
              }
            </StyledOutputLine>

            <StyledOutputLine>
              {
                item.dateCreation ? formatDate(new Date(item.dateCreation)) : EMPTY_LINE
              }
            </StyledOutputLine>
          </StyledNote>
        ))
      }
    </StyledNotesLayout>
  );
};

export default NotesLayoutContainer
