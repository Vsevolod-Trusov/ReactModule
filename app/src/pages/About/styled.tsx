import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)({
  height: '100vh',
});

const AboutWrapper = styled(Box)({
  alignSelf: 'center',
  margin: '0 auto',
  padding: '1rem',
  width: '90%',
  minHeight: '100%',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

export { AboutWrapper, Wrapper };
