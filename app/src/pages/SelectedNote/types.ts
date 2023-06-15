import { TNote } from '../NoteList/types';

export interface ISelectedNote {
  note: TNote;
  handleNavigateToEdit: () => void;
  handleShareNote: () => void;
}

export interface ISelectedNoteContainer {
  isShared?: boolean;
}
