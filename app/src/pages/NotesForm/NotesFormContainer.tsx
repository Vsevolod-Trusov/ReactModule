import React, { FC } from 'react';
import { FormikValues } from 'formik';
import { useSelector } from 'react-redux';

import { selectEmail } from 'store/slices/user.slice';
import { createNote } from 'api/notes';

import NotesForm from './NotesForm';

const NotesFormContainer: FC = () => {
  const email = useSelector(selectEmail);

  const create = createNote();

  const submit = (values: FormikValues): void => {
    create.mutate({
      id: null,
      title: values.title,
      description: values.description,
      dateCreation: new Date(values.dateCreation),
      author: email,
    });
  };

  return <NotesForm handleSubmit={submit} />;
};

export default NotesFormContainer;
