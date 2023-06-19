import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectNote } from 'store/slices/notes.slice';
import { ROUTE } from 'config/constants/routes';
import { editNote } from 'api/notes';

import SelectedNote from './SelectedNote';
import {
  StyledNoteContainerWrapper,
  StyledNotificationSelected,
} from './styled';
import { ISelectedNoteContainer } from './types';

const SelectedNoteContainer: FC<ISelectedNoteContainer> = ({ isShared }) => {
  const selectedNote = useSelector(selectNote);
  const navigate = useNavigate();
  const mutation = editNote(selectedNote.id, isShared);

  const handleNavigateToEdit = () => {
    if (isShared) {
      navigate(ROUTE.SHARED_NOTE);
    } else {
      navigate(ROUTE.MY_NOTE);
    }
  };

  const handleShareNote = () => {
    mutation.mutate({
      isShared: true,
    });
    navigate(ROUTE.NOTES);
  };

  if (Object.keys(selectedNote).length === 0) {
    return <StyledNotificationSelected>Select Note</StyledNotificationSelected>;
  }

  return (
    <StyledNoteContainerWrapper>
      <SelectedNote
        note={selectedNote}
        handleNavigateToEdit={handleNavigateToEdit}
        handleShareNote={handleShareNote}
      />
    </StyledNoteContainerWrapper>
  );
};

export default SelectedNoteContainer;
