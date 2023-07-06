import { TNote } from 'pages/NoteList/types';
import { PropsWithChildren } from 'react';

export interface INodesLayout {
  title?: string;
  notes: TNote[];
  handleSetSelectedNote?: (item: TNote) => void;
}

export interface INotes {
  notes: TNote[];
  handleSetSelectedNote: (item: TNote) => void;
  selectedNoteId?: number;
}

export interface IInfinityScroll extends INodesLayout {
  dataLength?: number;
  hasMore: boolean;
  setNotes: () => void;
}

export interface IStyleNote extends PropsWithChildren {
  selected: boolean;
}

export interface INotesButton extends PropsWithChildren {
  selected: boolean;
}
