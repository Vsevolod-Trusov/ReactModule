import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TNote } from 'pages/NoteList/types';
import { useDispatch, useSelector } from 'react-redux';

import { InfinityScroll, FilterNotes } from 'components/index';
import { ROUTE } from 'config/constants/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'api/constants';
import { setShared } from 'store/slices/notes.slice';
import { selectFirstName } from 'store/slices/user.slice';

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
      <FilterNotes isShared={true} />
      <InfinityScroll isShared={true} />
    </Box>
  );
};

export default SharedNotesContainer;
