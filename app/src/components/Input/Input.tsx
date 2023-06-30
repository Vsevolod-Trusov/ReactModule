import React, { FC } from 'react';
import { TextFieldProps } from '@mui/material/TextField/TextField';

import { StyledTextField } from './styled';

const Input: FC<TextFieldProps> = ({ helperText, ...props }) => (
  <>
    <StyledTextField helperText={helperText} {...props} />
  </>
);

export default Input;
