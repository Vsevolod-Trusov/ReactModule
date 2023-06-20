import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from '../FormInput/styled';
import { StyledInputAndErrorWrapper } from './styled';

const SignUpInput: FC<FieldAttributes<any>> = (props) => (
  <StyledInputAndErrorWrapper>
    <StyledField {...props} />
    <StyledErrorMessage name={props.name} component={'div'} />
  </StyledInputAndErrorWrapper>
);

export default SignUpInput;
