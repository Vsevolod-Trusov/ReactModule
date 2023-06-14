import { TNote } from '../NoteList/types';

export interface ISelectedNote {
  note: TNote;
  handleNavigateToEdit: () => void;
}

export interface ISelectedNoteContainer {
  isShared?: boolean;
}
