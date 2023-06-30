import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledErrorMessage, StyledField } from './styled';
import { IFormInput } from './types';

const FormInput: FC<FieldAttributes<IFormInput>> = ({ name, ...props }) => (
  <>
    <StyledField name={name} {...props} />
    <StyledErrorMessage name={name} component={'div'} />
  </>
);

export default FormInput;
