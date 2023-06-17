import React, { FC } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { FormikValues } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectFirstName } from 'store/slices/user.slice';
import { useCreateNote } from 'api/notes';

import NotesForm from './NotesForm';

const NotesFormContainer: FC = () => {
  const firstname = useSelector(selectFirstName);

  const createNote = useCreateNote();

  const submit = (values: FormikValues): void => {
    createNote.mutate({
      id: null,
      title: values.title,
      description: values.description,
      dateCreation: new Date(values.dateCreation),
      author: firstname,
    });
  };

  return <NotesForm handleSubmit={submit} />;
};

export default NotesFormContainer;
