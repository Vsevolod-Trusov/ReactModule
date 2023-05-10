import { TNode } from '../../NodeList';
import React from 'react';

export interface IHandleEditNote {
  notes: TNode[],
  selectedNoteIndex: number,
  description: string,
  setNotes: React.Dispatch<React.SetStateAction<TNode[]>>
}

