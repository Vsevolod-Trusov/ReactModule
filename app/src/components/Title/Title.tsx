import React, { FC, PropsWithChildren } from 'react';
import { StyledTitle } from './styled';
import { TypographyProps } from '@mui/material/Typography';

const Title: FC<PropsWithChildren<TypographyProps>> = (props) => {
  return <StyledTitle variant={props.variant}>{props.children}</StyledTitle>;
};

export default Title;
