import { Form } from 'formik';
import styled from 'styled-components';

const StyledFilterForm = styled(Form)({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',

  '& > div': {
    display: 'flex',
    minWidth: '30%',

    justifyContent: 'space-between',
    flexDirection: 'row',

    input: {
      display: 'block',
      minWidth: '10%',
      height: '1rem',
    },
  },
});

export { StyledFilterForm };
