import React, { FC } from 'react';
import { TextFieldProps } from '@mui/material';

import { Input } from 'components';

import { StyledInputAndErrorWrapper } from './styled';

const SignUpInput: FC<TextFieldProps> = ({ name, ...props }) => (
  <Input name={name} {...props} />
);

export default SignUpInput;
