import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import { Edit, IosShare } from '@mui/icons-material';

import {
  EMPTY_LINE,
  SLICE_POSITION,
  TITLE_POSITION,
} from 'pages/NoteList/constants';
import { TNote } from 'pages/NoteList/types';
import { formatDate, getPrettyDate, sliceText } from 'utils';
import { Title } from 'components';

import {
  StyledNote,
  StyledOutputLine,
  StyledNoteHeader,
  StyledNoteBody,
  StyledNotesButton,
  StyledDescription,
} from './styled';
import { INotes } from './types';
import { LABELS } from './constants';

const NotesLayout: FC<INotes> = ({
  notes,
  handleSetSelectedNote,
  selectedNoteId,
}) => (
  <>
    {notes?.map((note: TNote, index) => (
      <Draggable draggableId={note.testId} key={note.testId} index={index}>
        {(provided) => (
          <Box
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Box>
              <StyledNote
                onClick={() =>
                  handleSetSelectedNote && handleSetSelectedNote(note)
                }
                selected={selectedNoteId === note.id}
              >
                <StyledNoteHeader>
                  <Box>
                    <Title variant={'h5'}>
                      {sliceText(note.title, TITLE_POSITION)}
                    </Title>
                  </Box>
                  <Box>
                    <StyledOutputLine selected={selectedNoteId === note.id}>
                      {note.dateCreation
                        ? getPrettyDate(new Date(note.dateCreation))
                        : EMPTY_LINE}
                    </StyledOutputLine>
                  </Box>
                </StyledNoteHeader>
                <StyledNoteBody>
                  <Box>
                    <StyledDescription selected={selectedNoteId === note.id}>
                      {sliceText(note.description, SLICE_POSITION)}
                    </StyledDescription>
                  </Box>
                  <Box>
                    <StyledNotesButton
                      variant='contained'
                      selected={selectedNoteId === note.id}
                    >
                      <Box>
                        <Edit fontSize='small' />
                      </Box>
                      <Box>{LABELS.EDIT}</Box>
                    </StyledNotesButton>
                    <StyledNotesButton
                      variant='contained'
                      selected={selectedNoteId === note.id}
                    >
                      <Box>
                        <IosShare fontSize='small' />
                      </Box>
                      <Box>{LABELS.SHARE}</Box>
                    </StyledNotesButton>
                  </Box>
                </StyledNoteBody>
              </StyledNote>
            </Box>
          </Box>
        )}
      </Draggable>
    ))}
  </>
);

export default NotesLayout;
