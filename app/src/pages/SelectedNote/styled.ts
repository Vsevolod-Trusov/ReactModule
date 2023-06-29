import { Box } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from 'config/colors';

const StyledNoteContainerWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const StyledNoteWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minWidth: '98%',
  minHeight: '89vh',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

const StyledSelectedNoteWrapper = styled(StyledNoteWrapper)({
  'div:first-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '30%',
    border: `2px dashed ${COLORS.BLACK}`,
    borderRadius: '1rem',

    h1: {
      margin: '0 auto',
    },
  },

  'div:last-child': {
    minWidth: '30%',
  },
});

const StyledButtonWrapper = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-evenly',
});

const StyledSelectedButtonWrapper = styled(StyledButtonWrapper)({
  margin: '2rem 0',
});

const StyledNotificationSelected = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyleInfoBox = styled(Box)({
  margin: '1rem',
});

export {
  StyledNoteContainerWrapper,
  StyledNoteWrapper,
  StyledButtonWrapper,
  StyledSelectedButtonWrapper,
  StyledNotificationSelected,
  StyledSelectedNoteWrapper,
  StyleInfoBox,
};
