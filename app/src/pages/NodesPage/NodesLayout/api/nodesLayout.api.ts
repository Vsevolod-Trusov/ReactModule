import {
  currentItemWrapper, DEFAULT_NODE_SHADOW,
  isSelected,
  SELECTED_NODE_SHADOW,
  TNode,
} from '../../NodeList';

export const handleIsSelected = (item: TNode, title: string) => (
  {
    ...currentItemWrapper,
    boxShadow: `0 10px 15px -3px ${isSelected(item.title, title) ?
      SELECTED_NODE_SHADOW :
      DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  })
