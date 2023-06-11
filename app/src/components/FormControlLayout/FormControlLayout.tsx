import React, { FC } from 'react';
import { FormControlProps } from '@mui/material/FormControl/FormControl';

import { StyledFormControl } from './styled';

const FormControlLayout: FC<FormControlProps> = ({ children }, props) => {
  return <StyledFormControl {...props}>{children}</StyledFormControl>;
};

export default FormControlLayout;
