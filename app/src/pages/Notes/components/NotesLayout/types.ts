import { TNote } from '../../types';

export interface INodesLayout {
  title?: string,
  notes: TNote[],
  handleSetSelectedNote?: (item: TNote) => void,
}

export interface IInfinityScroll extends INodesLayout{
  setNotes: () => void,
  hasMore: boolean
}
