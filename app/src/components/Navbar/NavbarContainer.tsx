import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectFirstName } from 'store/slices/user.slice';

import { StyledNavbarBox } from './styled';
import Navbar from './Navbar';

const NavbarContainer: FC = () => {
  const isUserAuthorized = useSelector(selectFirstName) ? true : false;

  return (
    <StyledNavbarBox>
      <Navbar isUserAuthorized={isUserAuthorized} />
    </StyledNavbarBox>
  );
};
export default NavbarContainer;
