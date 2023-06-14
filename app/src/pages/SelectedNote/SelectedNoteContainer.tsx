import Box from '@mui/material/Box';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectNote } from 'store/slices/notes.slice';
import { ROUTE } from 'config/constants/routes';

import SelectedNote from './SelectedNote';
import { StyledNoteContainerWrapper } from './styled';
import { ISelectedNoteContainer } from './types';

const SelectedNoteContainer: FC<ISelectedNoteContainer> = ({ isShared }) => {
  const selectedNote = useSelector(selectNote);
  const navigate = useNavigate();

  const handleNavigateToEdit = () => {
    if (isShared) {
      navigate(ROUTE.SHARED_NOTE);
    } else {
      navigate(ROUTE.MY_NOTE);
    }
  };

  if (Object.keys(selectedNote).length === 0) {
    return <Box>Select Note</Box>;
  }

  return (
    <StyledNoteContainerWrapper>
      <SelectedNote
        note={selectedNote}
        handleNavigateToEdit={handleNavigateToEdit}
      />
    </StyledNoteContainerWrapper>
  );
};

export default SelectedNoteContainer;
