import React from 'react'
import { NavigateFunction } from 'react-router-dom';
import { IHandleEditNote } from './interfaces';

export const handleEditNote = ({notes, selectedNoteIndex, description, setNotes}: IHandleEditNote) => {

  const updatedNote = {
    ...notes[selectedNoteIndex],
    description: description,
  };

  const updatedNotes = [...notes];
  updatedNotes[selectedNoteIndex] = updatedNote;

  setNotes(updatedNotes);
};

export const handleSubmit = (event: React.FormEvent, navigate:  NavigateFunction) => {
  event.preventDefault();
  navigate('/ReactModule/nodes')
};
