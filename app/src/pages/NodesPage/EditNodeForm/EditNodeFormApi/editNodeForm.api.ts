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
