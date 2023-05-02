import { TNode } from './types';
import { isSelected } from '../../../api/NodesListApi/nodesList.api';

export const SELECTED_NODE_SHADOW = 'rgba(79, 208, 79, 100)'
export const DEFAULT_NODE_SHADOW = ' rgba(0, 0, 0, 0.1)'
export const HOVER_NODE_SHADOW = 'rgba(113, 113, 215, 100)'

export const itemAlignment = {
  marginTop: '0.5rem'
}

export const selectedNodeBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '8rem',
}

export const itemsBox = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export const currentItemWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',

  margin: '1rem',
  backgroundColor: '#faf7f7',
  borderRadius: '1rem',

  ':hover': {
    backgroundColor: '#a2a1a1',
    transition: '.2s',
    boxShadow:
      `0 10px 15px -3px ${HOVER_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },

  ':active': {
    backgroundColor: '#4b4b4b',
    transition: '.2s',
    boxShadow:
      `0 10px 15px -3px ${SELECTED_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },
}

