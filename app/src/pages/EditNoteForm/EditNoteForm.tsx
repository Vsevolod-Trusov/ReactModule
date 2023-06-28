import React, { FC } from 'react';
import { TextField, Button } from '@mui/material';

import { StyledButtonWrapper } from 'pages/SelectedNote/styled';
import { Title } from 'components';
import { formatDate } from 'utils';

import {
  EDIT_LABEL,
  EDIT,
  TITLE_LABEL,
  DATE_LABEL,
  DESCRIPTION_LABEL,
} from './constants';
import { IEditNodeForm } from './types';
import { StyledEditNodeForm, StyledEditNodeFormWrapper } from './styled';

const EditNoteForm: FC<IEditNodeForm> = ({
  note,
  handleSetDescription,
  description,
  handleEditNote,
}) => {
  const { title, dateCreation } = note;
  return (
    <StyledEditNodeFormWrapper>
      <Title variant={'h1'}>{EDIT_LABEL}</Title>
      <StyledEditNodeForm>
        <TextField
          label={TITLE_LABEL}
          value={title}
          variant='outlined'
          margin='normal'
          fullWidth
          disabled
        />
        <TextField
          label={DATE_LABEL}
          value={formatDate(new Date(dateCreation))}
          variant='outlined'
          margin='normal'
          fullWidth
          disabled
        />
        <TextField
          label={DESCRIPTION_LABEL}
          value={description}
          name={'nodeText'}
          onChange={handleSetDescription}
          variant='outlined'
          rows={4}
          margin='normal'
          fullWidth
          multiline
        />
        <StyledButtonWrapper>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            onClick={handleEditNote}
          >
            {EDIT}
          </Button>
        </StyledButtonWrapper>
      </StyledEditNodeForm>
    </StyledEditNodeFormWrapper>
  );
};

export default EditNoteForm;
