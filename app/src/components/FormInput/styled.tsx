import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

import { COLORS } from 'pages/colors';

const StyledField = styled(Field)({
  margin: '8px 0',
  padding: '1rem',
  minWidth: '100%',

  borderRadius: '0.5rem',
  outline: 'auto',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  backgroundColor: 'transparent',

  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: '100',
  letterSpacing: '0.075rem',
  lineHeight: '1.25rem',
});

const StyledErrorMessage = styled(ErrorMessage)({
  color: COLORS.ERROR,
});

export { StyledField, StyledErrorMessage };
