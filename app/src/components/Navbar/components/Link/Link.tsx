import React, { FC, PropsWithChildren } from 'react';

import { StyledLink } from 'components/Navbar/styled';

import { TLinkProps } from './types';

const Link: FC<PropsWithChildren<TLinkProps>> = ({
  name,
  onClick,
  children,
}) => (
  <StyledLink variant={'button'} underline={'none'} onClick={onClick}>
    {name || children}
  </StyledLink>
);

export default Link;
