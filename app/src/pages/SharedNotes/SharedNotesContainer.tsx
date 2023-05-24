import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';

import { ROUTE } from 'config/routes/routes';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import Title from 'components/Title';
import NotesLayoutContainer from 'pages/Notes/components/NotesLayout';
import { TNode } from 'pages/Notes/types';

const SharedNotesContainer = () => {

  const [notes, setNotes] = useState([])

  if (!window.localStorage.getItem('email')) {

    return <Navigate to={ROUTE.NOT_FOUND} />
  }

  const { isSuccess, data } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
      method: FETCH_METHODS.GET,
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    }))
  })

  if (isSuccess && !notes.length) {
    data?.json().then((notes) => {
      setNotes(notes.filter((note: TNode) => (note?.isShared)))
    })
  }

  return (
    <Box>
      <Title variant={'h1'}>Shared notes</Title>
      <NotesLayoutContainer notes={notes} />
    </Box>
  );
};

export default SharedNotesContainer;
