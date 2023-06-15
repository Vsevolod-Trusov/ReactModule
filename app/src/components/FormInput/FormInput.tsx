import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from './styled';
import { Box } from '@mui/material';

const FormInput: FC<FieldAttributes<any>> = (props) => (
  <>
    <StyledField {...props} />
    <StyledErrorMessage name={props.name} component={'div'} />
  </>
);
export default FormInput;
