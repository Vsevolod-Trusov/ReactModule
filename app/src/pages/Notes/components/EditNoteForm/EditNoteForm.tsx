import React, { FC } from 'react';
import { Box, TextField, Button } from '@mui/material';

import { EDIT, SHARE } from './constants';
import { IEditNodeForm } from './types';
import { StyledEditNodeForm } from './styled';

const EditNoteForm: FC<IEditNodeForm> = ({
  note,
  handleSetDescription,
  description,
  handleEditNote,
  handleShareNote,
}) => {
  const { title, dateCreation } = note;
  return (
    <StyledEditNodeForm>
      <TextField
        label='Title'
        value={title}
        variant='outlined'
        margin='normal'
        fullWidth
        disabled
      />
      <TextField
        label='Task date'
        value={dateCreation}
        variant='outlined'
        margin='normal'
        fullWidth
        disabled
      />
      <TextField
        label='Text Area'
        value={description}
        name={'nodeText'}
        onChange={handleSetDescription}
        variant='outlined'
        rows={4}
        margin='normal'
        fullWidth
        multiline
      />
      <Box>
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
      </Box>
    </StyledEditNodeForm>
  );
};

export default EditNoteForm;
