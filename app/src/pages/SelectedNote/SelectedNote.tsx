import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { Title } from 'components/index';
import { formatDate } from 'utils/formatDate';

import { StyledButtonWrapper, StyledNoteWrapper } from './styled';
import { ISelectedNote } from './types';
import { EDIT } from './constants';

const SelectedNote: FC<ISelectedNote> = ({ note, handleNavigateToEdit }) => {
  if (!note?.title) {
    return <StyledNoteWrapper>Select note</StyledNoteWrapper>;
  }

  return (
    <StyledNoteWrapper>
      <Title variant={'h1'}>{note.title}</Title>
      <Box>{formatDate(new Date(note.dateCreation))}</Box>
      <Box>{note.description}</Box>
      <StyledButtonWrapper>
        <Button
          variant='contained'
          color='primary'
          type='button'
          onClick={handleNavigateToEdit}
        >
          {EDIT}
        </Button>
      </StyledButtonWrapper>
    </StyledNoteWrapper>
  );
};

export default SelectedNote;
