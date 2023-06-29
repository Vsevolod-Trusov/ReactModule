import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledTextAreaField } from './styled';

const TextArea: FC<FieldAttributes<any>> = ({
  name,
  value,
  onChange,
  placeholder,
}) => (
  <>
    <StyledTextAreaField
      name={name}
      value={value}
      placeholder={placeholder}
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
