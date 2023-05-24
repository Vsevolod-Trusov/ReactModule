import { TSelectedNode } from './components/SelectedNote/types';

export type TNode = {
  id: number | null,
  title: string,
  description: string,
  dateCreation: Date | null,
  isShared?: boolean
}

export type TUpdateNote = {
  isShared?: boolean,
  description?: string
}

export type TNodeListProps = {
  handleSetSelectedNote: (item: TNode) => void
} & TSelectedNode
