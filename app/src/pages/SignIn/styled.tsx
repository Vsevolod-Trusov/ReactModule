import styled from 'styled-components';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { StyledForm } from 'components/Form/styled';

import { COLORS } from '../colors';

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

const StyledLink = styled(Link)({
  display: 'block',
  margin: '0.75rem 0 0 0',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  textAlign: 'center',
  color: COLORS.LINK_DEFAULT,
  textDecoration: 'underline',

  ':hover': {
    color: COLORS.LINK_HOVER,
    transition: '.2s',
  },
});

export { StyledWrapper, SignUpForm, StyledLink };
