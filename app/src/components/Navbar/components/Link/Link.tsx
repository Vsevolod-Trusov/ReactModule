import React from 'react';
import { TLinkProps } from './types';
import { StyledLink } from '../../styled';

const Link = ({ name, onClick }: TLinkProps) => {

  return (
    <StyledLink variant={'button'}
                underline={'none'}
                onClick={onClick}
    >
      {name}
    </StyledLink>
  );
};

export default Link;
