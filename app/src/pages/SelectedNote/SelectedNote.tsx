import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { Title } from 'components/index';
import { formatDate } from 'utils/formatDate';

import {
  StyledSelectedButtonWrapper,
  StyledNoteWrapper,
  StyledSelectedNoteWrapper,
  StyleInfoBox,
} from './styled';
import { ISelectedNote } from './types';
import { EDIT } from './constants';
import { SHARE } from '../EditNoteForm/constants';

const SelectedNote: FC<ISelectedNote> = ({
  note,
  handleNavigateToEdit,
  handleShareNote,
}) => {
  if (!note?.title) {
    return <StyledNoteWrapper>Select note</StyledNoteWrapper>;
  }

  return (
    <StyledSelectedNoteWrapper>
      <Box>
        <Title variant={'h1'}>{note.title}</Title>
        <StyleInfoBox>
          Date: {formatDate(new Date(note.dateCreation))}
        </StyleInfoBox>
        <StyleInfoBox>TODO: {note.description}</StyleInfoBox>
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
};

export default SelectedNote;
