import { Dispatch, SetStateAction } from 'react';

export type TNote = {
  id: number | null;
  title: string;
  description: string;
  dateCreation: Date | null;
  isShared?: boolean;
  author?: string;
  testId?: string;
};

export type TSelectedNode = {
  note?: TNote;
  dateCreation?: string;
  setNotes?: Dispatch<SetStateAction<TNote[]>>;
  notes?: TNote[];
};

export type TUpdateNote = {
  isShared?: boolean;
  description?: string;
};

export type TNoteListProps = {
  handleSetSelectedNote?: (item: TNote) => void;
} & TSelectedNode;

export type TInfinityScrollProps = {
  handleSetSelectedNote?: (item: TNote) => void;
  isShared: boolean;
};
