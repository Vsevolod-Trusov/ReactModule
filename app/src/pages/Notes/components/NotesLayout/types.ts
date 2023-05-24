import { TNote } from '../../types';

export interface INodesLayout {
  title?: string,
  notes: TNote[],
  handleSetSelectedNote?: (item: TNote) => void
}
