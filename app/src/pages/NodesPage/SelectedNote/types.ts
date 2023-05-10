import { TNode } from "../NodeList/types";
import React from 'react';

export type TSelectedNode = {
  setNotes:  React.Dispatch<React.SetStateAction<TNode[]>>,
  notes: TNode[]
} & TNode
