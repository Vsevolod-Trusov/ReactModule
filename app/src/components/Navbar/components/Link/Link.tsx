import React, { FC } from 'react';
import { TLinkProps } from './types';
import { StyledLink } from '../../styled';

const Link: FC<TLinkProps> = ({ name, onClick }) => {

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
