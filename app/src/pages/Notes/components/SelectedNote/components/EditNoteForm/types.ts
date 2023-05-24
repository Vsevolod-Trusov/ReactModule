import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { TNote, TUpdateNote } from '../../../../types';

export interface IEditNodeProps {
  note?: TNote,
  setNotes?:  Dispatch<SetStateAction<TNote[]>>
  notes?: TNote[],
}

export interface  IHandleEditNote{
  description: string,
}

export interface IEditNodeForm{
  note: TNote,
  description: string,
  handleSetDescription: (event: ChangeEvent<HTMLInputElement>) => void,
  handleEditNote:  (editNote: IHandleEditNote) => void,
  handleShareNote: () => void
}


