import styled from 'styled-components';
import { Box } from '@mui/material';

import { StyledForm } from 'components/Form/styled';

const StyledWrapper = styled(Box)({
  display: 'flex',
  minHeight: '80vh',
  width: '100%',
});

const SignUpForm = styled(StyledForm)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    marginTop: '1rem',
  },
});

export { StyledWrapper, SignUpForm };
