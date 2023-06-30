import React, { FC, HTMLAttributes } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from '../FormInput/styled';
import { StyledInputAndErrorWrapper } from './styled';

const SignUpInput: FC<FieldAttributes<HTMLAttributes<HTMLInputElement>>> = ({
  name,
  ...props
}) => (
  <StyledInputAndErrorWrapper>
    <StyledField name={name} {...props} />
    <StyledErrorMessage name={name} component={'div'} />
  </StyledInputAndErrorWrapper>
);

export default SignUpInput;
