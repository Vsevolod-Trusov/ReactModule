import React, { FC, PropsWithChildren } from 'react';
import { TypographyProps } from '@mui/material/Typography';

import { StyledTitle } from './styled';

const Title: FC<PropsWithChildren<TypographyProps>> = (props) => (
  <StyledTitle variant={props.variant}>{props.children}</StyledTitle>
);
export default Title;
