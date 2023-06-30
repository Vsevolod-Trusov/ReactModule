import styled from 'styled-components';
import { Box } from '@mui/material';

import { COLORS } from 'config/colors';
import {
  HOVER_NODE_SHADOW,
  SELECTED_NODE_SHADOW,
} from 'pages/NoteList/constants';

const StyledNotesLayout = styled(Box)({
  display: 'block',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '0.5rem',
  height: '57vh',
  overflowY: 'scroll',
});

const StyledNoteWrapper = styled(Box)({
  backgroundImage: `linear-gradient(-180deg, ${COLORS.GRADIENT_START} 0%, ${COLORS.GRADIENT_END} 100%)`,
  borderRadius: '20px',
  transition: 'all .3s',
  ':hover': {
    boxShadow: `0px 0px 30px 1px ${COLORS.NOTE_SHADOW}`,
  },
  ':active': {
    boxShadow: `0px 0px 30px 1px ${COLORS.NOTE_SHADOW}`,
  },
});

const StyledNote = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  margin: '1rem 1 rem 0 1rem',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  transition: 'all .2s',
  ':hover': {
    transform: 'scale(0.985)',
    borderRadius: '20px',
  },
  ':active': {
    transform: 'scale(0.985)',
    borderRadius: '20px',
  },
});

const StyledOutputLine = styled(Box)({
  marginTop: '0.5rem',
});

const StyledLoaderWrapper = styled(Box)({
  display: 'flex',
  minWidth: '90%',
  padding: '1rem',
  justifyContent: 'center',
});

const StyledNotification = styled(Box)({
  textAlign: 'center',
});

export {
  StyledNotesLayout,
  StyledLoaderWrapper,
  StyledNote,
  StyledOutputLine,
  StyledNotification,
  StyledNoteWrapper,
};
