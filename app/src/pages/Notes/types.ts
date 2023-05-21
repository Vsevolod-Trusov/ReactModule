import { Dispatch, SetStateAction } from 'react';

import { TSelectedNode } from './components/SelectedNote/types';

export type TNode = {
  id: number | null,
  title: string,
  description: string,
  dateCreation: Date | null
}

export type TNodeListProps = {
  handleSetSelectedNote: (item: TNode) => void
} & TSelectedNode