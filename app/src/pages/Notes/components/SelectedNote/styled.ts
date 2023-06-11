import styled from 'styled-components';
import Box from '@mui/material/Box';

const StyledSelectedNode = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '8rem',
});

const StyledEditWrapper = styled(Box)({
  padding: '1rem 0',
  minWidth: '80vw',
});

export { StyledSelectedNode, StyledEditWrapper };
