import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import {
  selectNote,
  selectNotes,
  setReduxNotes,
} from 'store/slices/notes.slice';
import { useEditNote } from 'api/notes';

import { IEditNodeProps, IHandleEditNote } from './types';
import EditNoteForm from './EditNoteForm';

const EditNoteContainer: FC<IEditNodeProps> = ({ isShared }) => {
  const selectedNote: TNote = useSelector(selectNote);
  const savedNotes: TNote[] = useSelector(selectNotes);
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>(
    selectedNote ? selectedNote?.description : '',
  );

  const mutation = useEditNote(selectedNote.id, isShared);

  const handleEditNote = ({ description }: IHandleEditNote) => {
    const selectedNoteIndex = savedNotes.findIndex(
      (item: TNote) => item.id === selectedNote.id,
    );
    const updatedNotes = [...savedNotes];
    const note = { ...savedNotes[selectedNoteIndex] };

    note.description = description;

    updatedNotes[selectedNoteIndex] = note;

    dispatch(setReduxNotes(updatedNotes));

    mutation.mutate({
      description: description,
    });
  };
  const handleSetDescription = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDescription(target.value);
  };

  useEffect(() => {
    setDescription(selectedNote.description);
  }, [selectedNote.description]);

  return (
    <EditNoteForm
      note={selectedNote}
      description={description}
      handleEditNote={handleEditNote}
      handleSetDescription={handleSetDescription}
    />
  );
};

export default EditNoteContainer;
