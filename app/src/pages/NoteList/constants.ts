import { TNote } from './types';

export const SELECTED_NODE_SHADOW = 'rgba(79, 208, 79, 100)';
export const DEFAULT_NODE_SHADOW = ' rgba(0, 0, 0, 0.1)';
export const HOVER_NODE_SHADOW = 'rgba(113, 113, 215, 100)';

export const EMPTY_LINE = '';
export const SLICE_POSITION = 20;
export const BUTTON_TEXT = 'Create new note';

export const INITIAL_STATE: TNote = {
  id: JSON.parse(localStorage.getItem('selected'))?.id || null,
  title: JSON.parse(localStorage.getItem('selected'))?.title || EMPTY_LINE,
  description:
    JSON.parse(localStorage.getItem('selected'))?.description || EMPTY_LINE,
  dateCreation:
    JSON.parse(localStorage.getItem('selected'))?.dateCreation || null,
};

export const INITIAL_USER_STATE = {
  id: null,
  firstName: EMPTY_LINE,
  lastName: EMPTY_LINE,
  birthday: EMPTY_LINE,
  email: EMPTY_LINE,
  password: EMPTY_LINE,
};

export const NODES: TNote[] = [
  {
    id: 1,
    testId: '1',
    title: 'Node #1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    dateCreation: new Date(),
    isShared: false,
  },

  {
    id: 2,
    testId: '2',
    title: 'Node #2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    dateCreation: new Date(),
    isShared: false,
  },

  {
    id: 3,
    testId: '3',
    title: 'Node #3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    dateCreation: new Date(),
    isShared: false,
  },

  {
    id: 4,
    testId: '4',
    title: 'Node #4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    dateCreation: new Date(),
    isShared: false,
  },

  {
    id: 5,
    testId: '5',
    title: 'Node #5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    dateCreation: new Date(),
    isShared: false,
  },
];
