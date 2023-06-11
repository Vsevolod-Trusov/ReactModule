import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Box from '@mui/material/Box';

import { formatDate } from 'utils/formatDate';
import { sliceText } from 'utils/formatText';
import { EMPTY_LINE, SLICE_POSITION } from 'pages/Notes/constants';
import { TNote } from 'pages/Notes/types';

import { StyledNote, StyledOutputLine } from './styled';
import { INotes } from './types';

const NotesLayout: FC<INotes> = ({ notes, handleSetSelectedNote }) => {
  return (
    <>
      {notes.map((item: TNote, index) => {
        return (
          <Draggable draggableId={item.testId} key={item.testId} index={index}>
            {(provided) => (
              <Box
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                ref={provided.innerRef}
              >
                <StyledNote
                  onClick={() =>
                    handleSetSelectedNote && handleSetSelectedNote(item)
                  }
                >
                  <Box>Title: {item.title}</Box>

                  <StyledOutputLine>
                    {sliceText(item.description, SLICE_POSITION)}
                  </StyledOutputLine>

                  <StyledOutputLine>
                    {item.dateCreation
                      ? formatDate(new Date(item.dateCreation))
                      : EMPTY_LINE}
                  </StyledOutputLine>
                </StyledNote>
              </Box>
            )}
          </Draggable>
        );
      })}
    </>
  );
};

export default NotesLayout;
