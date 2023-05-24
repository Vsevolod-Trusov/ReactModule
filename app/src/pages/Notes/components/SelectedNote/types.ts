import { Dispatch, SetStateAction } from 'react';
import { TNote } from '../../types';

export type TSelectedNode = {
  note?: TNote,
  dateCreation?: string,
  setNotes?:  Dispatch<SetStateAction<TNote[]>>,
  notes: TNote[]
}
