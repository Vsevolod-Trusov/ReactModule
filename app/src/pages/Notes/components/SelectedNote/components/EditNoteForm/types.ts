import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { TNode, TUpdateNote } from '../../../../types';

export interface IEditNodeProps {
  note?: TNode,
  setNotes?:  Dispatch<SetStateAction<TNode[]>>
  notes?: TNode[],
}

export interface  IHandleEditNote{
  description: string,
}

export interface IEditNodeForm{
  note: TNode,
  description: string,
  handleSetDescription: (event: ChangeEvent<HTMLInputElement>) => void,
  handleEditNote:  (editNote: IHandleEditNote) => void,
  handleShareNote: () => void
}


