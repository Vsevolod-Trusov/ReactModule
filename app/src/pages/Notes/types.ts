import { TSelectedNode } from './components/SelectedNote/types';

export type TNote = {
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

export type TNoteListProps = {
  handleSetSelectedNote: (item: TNote) => void
} & TSelectedNode
