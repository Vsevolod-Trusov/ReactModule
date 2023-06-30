import React, { FC, HTMLAttributes } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from './styled';

const FormInput: FC<FieldAttributes<HTMLAttributes<HTMLInputElement>>> = ({
  name,
  ...props
}) => (
  <>
    <StyledField name={name} {...props} />
    <StyledErrorMessage name={name} component={'div'} />
  </>
);

export default FormInput;
