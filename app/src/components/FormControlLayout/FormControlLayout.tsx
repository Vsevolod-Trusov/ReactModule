import React, { FC } from 'react';

import { StyledFormControl } from './styled';
import { FormControlProps } from '@mui/material/FormControl/FormControl';

const FormControlLayout:FC<FormControlProps> = ({children}, props) => {
  return (
    <StyledFormControl {...props}>
      {children}
    </StyledFormControl>
  )
}

export default FormControlLayout
