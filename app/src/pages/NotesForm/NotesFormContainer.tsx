import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormikValues } from 'formik';
import { useSelector } from 'react-redux';

import { selectFirstName } from 'config/redux/slices/user.slice';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import { TNote } from 'pages/Notes/types';

import NotesForm from './NotesForm';
import { ROUTE } from '../../config/routes/routes';
import { useNavigate } from 'react-router-dom';

const NotesFormContainer = () => {
  const navigate = useNavigate();
  const firstname = useSelector(selectFirstName);

  const mutation = useMutation({
    mutationFn: async (note: TNote) => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
      method: FETCH_METHODS.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })),
    onSuccess: () => (navigate(ROUTE.NOTES)),
  });

  const submit = (values: FormikValues): void => {
    mutation.mutate({
      id: null,
      title: values.title,
      description: values.description,
      dateCreation: new Date(values.dateCreation),
      author: firstname,
    });
  };

  return (
    <NotesForm handleSubmit={submit} />
  );
};

export default NotesFormContainer;
