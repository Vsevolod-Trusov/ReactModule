import React, { FC } from 'react';
import { FormikValues } from 'formik';
import { useSelector } from 'react-redux';

import { selectEmail } from 'store/slices/user.slice';
import { createNote } from 'api/notes';

import NotesForm from './NotesForm';
import { sliceText } from '../../utils/formatText';
import { SLICE_POSITION } from '../NoteList/constants';

const NotesFormContainer: FC = () => {
  const email = useSelector(selectEmail);

  const create = createNote();

  const submit = (values: FormikValues): void => {
    create.mutate({
      id: null,
      title: sliceText(values.title, SLICE_POSITION),
      description: values.description,
      dateCreation: new Date(Date.now()),
      author: email,
    });
  };

  return <NotesForm handleSubmit={submit} />;
};

export default NotesFormContainer;
