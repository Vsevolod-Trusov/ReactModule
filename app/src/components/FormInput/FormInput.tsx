import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from './styled';

const FormInput: FC<FieldAttributes<any>> = ({ name, ...props }) => (
  <>
    <StyledField name={name} {...props} />
    <StyledErrorMessage name={name} component={'div'} />
  </>
);

export default FormInput;
