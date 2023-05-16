import React, { MouseEventHandler } from 'react';
import { TNode } from '../../types';

export interface INodesLayout {
  title: string,
  notes: TNode[],
  setSelectedNode: React.Dispatch<React.SetStateAction<TNode>>,
  handleSetSelectedNote: (item: TNode) => void
}
