import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';
import { TextFieldProps } from '@mui/material';

import { StyledTextAreaField } from './styled';

const TextArea: FC<FieldAttributes<TextFieldProps>> = ({
  name,
  value,
  onChange,
  placeholder,
  helperText,
  error,
}) => (
  <>
    <StyledTextAreaField
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      variant='outlined'
      margin='normal'
      rows={4}
      fullWidth
      multiline
      onChange={onChange}
    />
  </>
);

export default TextArea;
