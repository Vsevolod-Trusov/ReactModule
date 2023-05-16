import React, { ChangeEvent, useEffect, useState } from 'react';

import { IEditNodeProps, IHandleEditNote } from './types';
import EditNoteForm from './EditNoteForm';
import { TNode } from '../../../../types';

const EditNoteContainer = ({ note, setNotes, notes }: IEditNodeProps) => {
  const [description, setDescription] = useState<string>(note.description);

 const handleEditNote = ( {description}: IHandleEditNote) => {

   const selectedNoteIndex = notes.findIndex((item: TNode) => item.id === note.id)

   const updatedNote = {
      ...notes[selectedNoteIndex],
      description: description,
    };

    const updatedNotes = [...notes];
    updatedNotes[selectedNoteIndex] = updatedNote;

    setNotes(updatedNotes);
  };


 const handleSetDescription = ({ target }:  ChangeEvent<HTMLInputElement>) => {
   setDescription(target.value)
 }

  useEffect(() => {
    setDescription(note.description);
  }, [note.description]);

  return (
   <EditNoteForm
      note={note}
      description={description}
      handleEditNote={handleEditNote}
      handleSetDescription={handleSetDescription}
   />
  );
};

export default EditNoteContainer
