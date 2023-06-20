import { Form } from 'formik';
import styled from 'styled-components';

import { COLORS } from 'pages/colors';

const StyledFilterForm = styled(Form)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '0.5rem',
  padding: '0 0.5rem',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  backgroundColor: COLORS.NOTE_BACKGROUND,

  '& > div': {
    display: 'flex',
    minWidth: '23vw',
    margin: '0.4rem',
    justifyContent: 'space-between',
    flexDirection: 'row',

    input: {
      display: 'inline',
      width: '205px',
      height: '1rem',
    },
  },
});

export { StyledFilterForm };
