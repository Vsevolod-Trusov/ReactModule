import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TNote } from 'pages/Notes/types';
import { useDispatch, useSelector } from 'react-redux';

import InfinityScrollContainer from 'components/InfinityScroll';
import FilterNotesContainer from 'components/FilterNotes';

import { ROUTE } from 'config/routes/routes';
import {
  FETCH_METHODS,
  FETCH_URLS,
  MOCK_API_ADDRESS,
} from 'config/fetch_urls/fetch';
import { setShared } from 'config/redux/slices/notes.slice';
import { selectFirstName } from 'config/redux/slices/user.slice';

const SharedNotesContainer: FC = () => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();

  if (!window.localStorage.getItem('email') || !firstname) {
    return <Navigate to={ROUTE.NOT_FOUND} />;
  }

  useQuery({
    queryKey: ['notes'],
    queryFn: async () =>
      await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
        method: FETCH_METHODS.GET,
        headers: { Accept: 'application/json' },
      }),
    onSuccess: async (data) => {
      const result = await data.json();
      const filtered = result.filter((note: TNote) => note?.isShared);
      dispatch(setShared(filtered));
    },
  });

  return (
    <Box>
      <FilterNotesContainer isShared={true} />

      <InfinityScrollContainer isShared={true} />
    </Box>
  );
};

export default SharedNotesContainer;
