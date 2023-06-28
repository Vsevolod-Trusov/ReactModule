import React, { FC } from 'react';
import { Button, Box } from '@mui/material';

import { Title } from 'components';
import { formatDate, sliceText } from 'utils';

import {
  StyledSelectedButtonWrapper,
  StyledNoteWrapper,
  StyledSelectedNoteWrapper,
  StyleInfoBox,
} from './styled';
import { ISelectedNote } from './types';
import { EDIT } from './constants';
import { SHARE } from '../EditNoteForm/constants';
import { SLICE_POSITION } from '../NoteList/constants';

const SelectedNote: FC<ISelectedNote> = ({
  note,
  handleNavigateToEdit,
  handleShareNote,
}) => {
  if (note?.title) {
    return (
      <StyledSelectedNoteWrapper>
        <Box>
          <Title variant={'h1'}>{note.title}</Title>
          <StyleInfoBox>
            Date: {formatDate(new Date(note.dateCreation))}
          </StyleInfoBox>
          <StyleInfoBox>
            TODO: {sliceText(note.description, SLICE_POSITION)}
          </StyleInfoBox>
        </Box>
        <StyledSelectedButtonWrapper>
          <Button
            variant='contained'
            color='primary'
            type='button'
            onClick={handleNavigateToEdit}
          >
            {EDIT}
          </Button>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            onClick={() => handleShareNote()}
          >
            {SHARE}
          </Button>
        </StyledSelectedButtonWrapper>
      </StyledSelectedNoteWrapper>
    );
  }

  if (!note?.title) {
    return <StyledNoteWrapper>Select note</StyledNoteWrapper>;
  }
};

export default SelectedNote;
