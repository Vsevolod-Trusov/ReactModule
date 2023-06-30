import { Form } from 'formik';
import styled from 'styled-components';

import { COLORS } from 'config/colors';
import { StyledTextField } from 'components/Input/styled';

const StyledFilterForm = styled(Form)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '0.5rem',
  padding: '0 0.5rem',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  backgroundColor: COLORS.NOTE_BACKGROUND,
  '& > div': {
    display: 'flex',
    width: '90%',
    margin: '0.4rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    input: {
      display: 'inline',
      maxHeight: '0.4rem',
      width: '20vw',
    },
  },
});

const StyledFilterInput = styled(StyledTextField)({
  margin: '8px 0',
  padding: '1rem',
  minWidth: '100%',
  borderRadius: '0.5rem',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  backgroundColor: 'transparent',
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: '100',
  letterSpacing: '0.075rem',
  lineHeight: '1.25rem',
});

export { StyledFilterForm, StyledFilterInput };
