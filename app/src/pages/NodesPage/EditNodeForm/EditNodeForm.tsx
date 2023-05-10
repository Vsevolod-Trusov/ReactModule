import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { fieldsContainer } from './styled';
import { IEditNodeProps } from './interfaces';
import { handleEditNote } from './EditNodeFormApi/editNodeForm.api';

export const EditNodeForm = ({ nodeTitle, nodeDate, nodeText, setNotes, notes, selectedNoteIndex }: IEditNodeProps) => {
  const [description, setDescription] = useState<string>(nodeText);

  useEffect(() => {
    setDescription(nodeText);
  }, [nodeText]);

  return (
    <form>
      <Box sx={fieldsContainer}>
        <TextField
          label='Title'
          value={nodeTitle}
          variant='outlined'
          fullWidth
          margin='normal'
          disabled
        />
        <TextField
          label='Task date'
          value={nodeDate}
          variant='outlined'
          fullWidth
          margin='normal'
          disabled
        />
        <TextField
          label='Text Area'
          value={description}
          name={'nodeText'}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          variant='outlined'
          fullWidth
          multiline
          rows={4}
          margin='normal'
        />
        <Box>
          <Button variant='contained' color='primary' type='submit' onClick={() => handleEditNote({notes: notes,
            selectedNoteIndex: selectedNoteIndex,
            description: description,
            setNotes: setNotes})}>
            Edit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

