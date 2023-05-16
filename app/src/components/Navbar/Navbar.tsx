import React from 'react'

import { StyledHeaderWrapper, StyledNavbar } from './styled';
import LinkContainer from './components/Link/LinkContainer';
import { MENU } from '../../pages/constants';


const Navbar = () => {

  return (
    <StyledNavbar>
      <StyledHeaderWrapper>
        {MENU}
      </StyledHeaderWrapper>

      <LinkContainer/>
    </StyledNavbar>
  )
}

export default Navbar
