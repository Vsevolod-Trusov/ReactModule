import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectEmail } from 'store/slices/user.slice';
import { createNote } from 'api/notes';
import { sliceText } from 'utils';
import { SLICE_POSITION } from 'pages/NoteList/constants';

import NotesForm from './NotesForm';
import { INotesValues } from './types';

const NotesFormContainer: FC = () => {
  const email = useSelector(selectEmail);

  const create = createNote();

  const submit = (values: INotesValues): void => {
    create.mutate({
      id: null,
      title: sliceText(values.title, SLICE_POSITION),
      description: values.description,
      dateCreation: new Date(
        new Date(Date.now()).toISOString().split('T')[0] + 'T00:00:00.000Z',
      ),
      author: email,
    });
  };

  return <NotesForm handleSubmit={submit} />;
};

export default NotesFormContainer;
