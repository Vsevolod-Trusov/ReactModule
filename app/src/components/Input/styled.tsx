import styled from 'styled-components';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  margin: '8px 0',
  padding: '1rem',
  minWidth: '100%',
  border: '1px solid black',
  borderRadius: '0.5rem',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  backgroundColor: 'transparent',
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: '100',
  letterSpacing: '0.075rem',
  lineHeight: '1.25rem',
});

export { StyledTextField };
