import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';

import { StyledTextAreaField } from './styled';

const TextArea: FC<FieldAttributes<any>> = (props) => {
  return (
    <>
      <StyledTextAreaField
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        variant='outlined'
        rows={4}
        margin='normal'
        fullWidth
        multiline
      />
    </>
  );
};

export default TextArea;
