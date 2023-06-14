import styled from 'styled-components';
import Box from '@mui/material/Box';
import { COLORS } from '../colors';

const StyledNoteListWrapper = styled(Box)({
  display: 'flex',
  marginTop: '0.5rem',
});

const StyledOutletWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
});

const StyledInfinityScrollWrapper = styled(Box)({
  marginTop: '0.5rem',
  padding: '0.4rem 0.4rem 0.4rem 0',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

export {
  StyledNoteListWrapper,
  StyledOutletWrapper,
  StyledInfinityScrollWrapper,
};
