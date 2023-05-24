import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { EDIT, SHARE } from './constants';
import { IEditNodeForm } from './types';
import { StyledEditNodeForm } from './styled';

const EditNoteForm: FC<IEditNodeForm> = ({
                                           note,
                                           handleSetDescription, description,
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
        fullWidth
        margin='normal'
        disabled
      />
      <TextField
        label='Task date'
        value={dateCreation}
        variant='outlined'
        fullWidth
        margin='normal'
        disabled
      />
      <TextField
        label='Text Area'
        value={description}
        name={'nodeText'}
        onChange={handleSetDescription}
        variant='outlined'
        fullWidth
        multiline
        rows={4}
        margin='normal'
      />
      <Box>
        <Button variant='contained' color='primary' type='submit'
                onClick={() => handleEditNote({ description: description })}>
          {EDIT}
        </Button>

        <Button variant='contained' color='primary' type='submit'
                onClick={() => handleShareNote()}>
          {SHARE}
        </Button>
      </Box>
    </StyledEditNodeForm>
  );
};

export default EditNoteForm;
