import React, { FC } from 'react';

import { StyledNavbarBox } from './styled';
import Navbar from './Navbar';

const NavbarContainer: FC = () => (
  <StyledNavbarBox>
    <Navbar />
  </StyledNavbarBox>
);
export default NavbarContainer;
