import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';

import { EMPTY_LINE, SLICE_POSITION } from 'pages/NoteList/constants';
import { TNote } from 'pages/NoteList/types';
import { formatDate, sliceText } from 'utils';
import { Title } from 'components';

import { StyledNote, StyledNoteWrapper, StyledOutputLine } from './styled';
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
            <StyledNoteWrapper>
              <StyledNote
                onClick={() =>
                  handleSetSelectedNote && handleSetSelectedNote(note)
                }
              >
                <Title variant={'h6'}>Title: {note.title}</Title>
                <StyledOutputLine>
                  {sliceText(note.description, SLICE_POSITION)}
                </StyledOutputLine>
                <StyledOutputLine>
                  {note.dateCreation
                    ? formatDate(new Date(note.dateCreation))
                    : EMPTY_LINE}
                </StyledOutputLine>
              </StyledNote>
            </StyledNoteWrapper>
          </Box>
        )}
      </Draggable>
    ))}
  </>
);

export default NotesLayout;
