import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';
import Box from '@mui/material/Box';

import { StyledErrorMessage, StyledField } from './styled';

const FormInput: FC<FieldAttributes<any>> = (props) => {
  return (
    <>
      <StyledField {...props} />
      <StyledErrorMessage name={props.name} component={'div'} />
    </>

  );
};

export default FormInput;
