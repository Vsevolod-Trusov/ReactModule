import styled from 'styled-components';
import Box from '@mui/material/Box';

import { COLORS } from 'pages/colors';
import { HOVER_NODE_SHADOW, SELECTED_NODE_SHADOW } from 'pages/Notes/constants';

const StyledNotesLayout = styled(Box)({
  display: 'block',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '0.5rem',
  height: '80vh',
  overflowY: 'scroll',
});

const StyledNote = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  borderTop: `1px solid ${COLORS.BORDER_COLOR}`,
  borderRight: `1px solid ${COLORS.BORDER_COLOR}`,
  borderLeft: `1px solid ${COLORS.BORDER_COLOR}`,
  margin: '1rem 1 rem 0 1rem',
  backgroundColor: COLORS.NOTE_BACKGROUND,

  /*  ':focus': {
          backgroundColor: '#4b4b4b',
          transition: '.2s',
          boxShadow:
            `0 10px 15px -3px ${SELECTED_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
        },*/

  ':hover': {
    backgroundColor: COLORS.NOTE_BACKGROUND_HOVER,
    transition: '.2s',
    boxShadow: `0 10px 15px -3px ${HOVER_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },

  ':active': {
    backgroundColor: COLORS.NOTE_BACKGROUND_ACTIVE,
    transition: '.2s',
    boxShadow: `0 10px 15px -3px ${SELECTED_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },
});

const StyledOutputLine = styled(Box)({
  marginTop: '0.5rem',
});

export { StyledNotesLayout, StyledNote, StyledOutputLine };
