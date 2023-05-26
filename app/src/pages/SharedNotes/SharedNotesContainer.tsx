import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import { TNote } from 'pages/Notes/types';
import { useDispatch, useSelector } from 'react-redux';

import InfinityScrollContainer from 'components/InfinityScroll';
import { ROUTE } from 'config/routes/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import { selectNotes, selectShared, setShared } from 'config/redux/slices/notes.slice';
import Title from 'components/Title';

const SharedNotesContainer: FC = () => {

  const dispatch = useDispatch()
  const shared = useSelector(selectShared)
  const notes = useSelector(selectNotes)

  if (!window.localStorage.getItem('email')) {

    return <Navigate to={ROUTE.NOT_FOUND} />;
  }

  /*const { isSuccess, data } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
      method: FETCH_METHODS.GET,
      headers: { 'Accept': 'application/json' },
      cache: 'no-store',
    })),
  });*/

  const saveNotesState = async () => {

    const filtered = notes.filter((note: TNote) => (note?.isShared))
    dispatch(setShared({shared: filtered}))

    /*if (isSuccess && !shared.length && !data?.bodyUsed) {
      const result = await data?.json();

    }*/
  };

  useEffect(() => {
    saveNotesState();
  }, []);

  return (
    <Box>
      <Title variant={'h1'}>Shared notes</Title>
      <InfinityScrollContainer notes={shared} />
    </Box>
  );
};

export default SharedNotesContainer;
