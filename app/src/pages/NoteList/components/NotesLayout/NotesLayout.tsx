import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';

import { EMPTY_LINE, SLICE_POSITION } from 'pages/NoteList/constants';
import { TNote } from 'pages/NoteList/types';
import { formatDate, sliceText } from 'utils';

import { StyledNote, StyledOutputLine } from './styled';
import { INotes } from './types';

const NotesLayout: FC<INotes> = ({ notes, handleSetSelectedNote }) => (
  <>
    {notes?.map((note: TNote, index) => (
      <Draggable draggableId={note.testId} key={note.testId} index={index}>
        {(provided) => (
          <Box
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <StyledNote
              onClick={() =>
                handleSetSelectedNote && handleSetSelectedNote(note)
              }
            >
              <Box>Title: {note.title}</Box>
              <StyledOutputLine>
                {sliceText(note.description, SLICE_POSITION)}
              </StyledOutputLine>
              <StyledOutputLine>
                {note.dateCreation
                  ? formatDate(new Date(note.dateCreation))
                  : EMPTY_LINE}
              </StyledOutputLine>
            </StyledNote>
          </Box>
        )}
      </Draggable>
    ))}
  </>
);

export default NotesLayout;
