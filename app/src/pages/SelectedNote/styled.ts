import Box from '@mui/material/Box';
import styled from 'styled-components';

import { COLORS } from 'pages/colors';

const StyledNoteContainerWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const StyledNoteWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '98%',
  minHeight: '89vh',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

const StyledButtonWrapper = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-evenly',
});

export { StyledNoteContainerWrapper, StyledNoteWrapper, StyledButtonWrapper };
