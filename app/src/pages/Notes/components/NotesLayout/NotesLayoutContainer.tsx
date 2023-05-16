import React from 'react';
import Box from '@mui/material/Box';

import { INodesLayout } from './types';
import { StyledNotesLayout, StyledNote, StyledOutputLine } from './styled';
import { TNode } from '../../types';
import { sliceText } from '../../../../utils/formatText';
import { EMPTY_LINE, SLICE_POSITION } from '../../constants';
import { formatDate } from '../../../../utils/formatDate';

const NotesLayoutContainer = ({ notes, setSelectedNode }: INodesLayout) => {

  /*   const handleIsSelected = (item: TNode, title: string) => (
     {
       ...currentItemWrapper,
       boxShadow: `0 10px 15px -3px ${isSelected(item.title, title) ?
         SELECTED_NODE_SHADOW :
         DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
     })*/

  return (
    <StyledNotesLayout>
      {
        notes.map((item: TNode, index: number) => (
          <StyledNote key={index}
               onClick={() => setSelectedNode(item)}
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
                item.dateCreation ? formatDate(item.dateCreation) : EMPTY_LINE
              }
            </StyledOutputLine>
          </StyledNote>
        ))
      }
    </StyledNotesLayout>
  );
};

export default NotesLayoutContainer
