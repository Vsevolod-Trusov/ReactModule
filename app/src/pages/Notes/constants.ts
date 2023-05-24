import { TNote } from './types';

export const SELECTED_NODE_SHADOW = 'rgba(79, 208, 79, 100)';
export const DEFAULT_NODE_SHADOW = ' rgba(0, 0, 0, 0.1)';
export const HOVER_NODE_SHADOW = 'rgba(113, 113, 215, 100)';

export const EMPTY_LINE = ''
export const SLICE_POSITION = 20

export const INITIAL_STATE: TNote = {
  id: null,
  title: '',
  description: '',
  dateCreation: null
}

export const NODES: TNote[] = [
  {
    id: 1,
    title: 'Node #1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    dateCreation: new Date(),
    isShared: false
  },

  {
    id: 2,
    title: 'Node #2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    dateCreation: new Date(),
    isShared: false
  },

  {
    id: 3,
    title: 'Node #3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    dateCreation: new Date(),
    isShared: false
  },

  {
    id: 4,
    title: 'Node #4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    dateCreation: new Date(),
    isShared: false
  },

  {
    id: 5,
    title: 'Node #5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    dateCreation: new Date(),
    isShared: false
  }
]
