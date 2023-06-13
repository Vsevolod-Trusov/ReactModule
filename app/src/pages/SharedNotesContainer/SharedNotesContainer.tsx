import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components/index';
import { ROUTE } from 'config/constants/routes';
import { useGetSharedNotes } from 'api/notes';
import { selectFirstName } from 'store/slices/user.slice';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.SIGNIN} />;
  }

  useGetSharedNotes();

  return (
    <Box>
      <FilterNotes isShared={true} />
      <InfinityScroll isShared={true} />
    </Box>
  );
};

export default SharedNotesContainer;
