import React, { FC } from 'react';

import { StyledLink } from 'components/Navbar/styled';

import { TLinkProps } from './types';

const Link: FC<TLinkProps> = ({ name, onClick }) => (
  <StyledLink variant={'button'} underline={'none'} onClick={onClick}>
    {name}
  </StyledLink>
);

export default Link;
