import styled from 'styled-components';
import Box from '@mui/material/Box';

import { HOVER_NODE_SHADOW, SELECTED_NODE_SHADOW } from '../../constants';
import { COLORS } from '../../../colors';

const StyledNotesLayout = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledNote = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',

  margin: '1rem',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  borderRadius: '1rem',

/*  ':focus': {
    backgroundColor: '#4b4b4b',
    transition: '.2s',
    boxShadow:
      `0 10px 15px -3px ${SELECTED_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },*/

  ':hover': {
    backgroundColor: COLORS.NOTE_BACKGROUND_HOVER,
    transition: '.2s',
    boxShadow:
      `0 10px 15px -3px ${HOVER_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },

  ':active': {
    backgroundColor: COLORS.NOTE_BACKGROUND_ACTIVE,
    transition: '.2s',
    boxShadow:
      `0 10px 15px -3px ${SELECTED_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },


});

const StyledOutputLine = styled(Box)({
    marginTop: '0.5rem',
})

export { StyledNotesLayout, StyledNote, StyledOutputLine };
