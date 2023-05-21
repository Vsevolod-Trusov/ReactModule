import React, { FC, FormHTMLAttributes, PropsWithChildren } from 'react';

import { StyledForm } from './styled';

const Form:FC<PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>> = (props) => {
  return (
    <StyledForm onSubmit={props.onSubmit}>
      {props.children}
    </StyledForm>
  )
}

export default Form