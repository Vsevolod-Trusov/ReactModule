import { TNode } from '../../types';

export interface INodesLayout {
  title?: string,
  notes: TNode[],
  handleSetSelectedNote?: (item: TNode) => void
}
