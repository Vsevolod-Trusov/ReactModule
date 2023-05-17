import { Dispatch, SetStateAction } from 'react';
import { TNode } from '../../types';

export type TSelectedNode = {
  note?: TNode,
  dateCreation?: string,
  setNotes?:  Dispatch<SetStateAction<TNode[]>>,
  notes: TNode[]
}
