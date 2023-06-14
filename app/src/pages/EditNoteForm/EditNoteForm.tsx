import React, { FC } from 'react';
import { TextField, Button } from '@mui/material';

import { StyledButtonWrapper } from 'pages/SelectedNote/styled';

import {
  EDIT,
  SHARE,
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
  handleShareNote,
}) => {
  const { title, dateCreation } = note;
  return (
    <StyledEditNodeFormWrapper>
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
          value={dateCreation}
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
            onClick={() => handleEditNote({ description: description })}
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
        </StyledButtonWrapper>
      </StyledEditNodeForm>
    </StyledEditNodeFormWrapper>
  );
};

export default EditNoteForm;
