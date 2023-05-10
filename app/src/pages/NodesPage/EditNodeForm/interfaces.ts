import React from 'react'
import { TNode } from '../NodeList';

export interface IEditNodeProps {
  nodeTitle: string,
  nodeDate: string,
  nodeText: string,
  setNotes:  React.Dispatch<React.SetStateAction<TNode[]>>
  notes: TNode[],
  selectedNoteIndex: number

}
