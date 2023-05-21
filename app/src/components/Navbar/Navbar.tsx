import React from 'react';

import { StyledHeaderWrapper, StyledNavbar } from './styled';
import LinkContainer from './components/Link/LinkContainer';
import { MENU, ROUTE_LABELS } from '../../pages/constants';
import { ROUTE } from '../../config/routes/routes';


const Navbar = () => {

  return (
    <StyledNavbar>
      <StyledHeaderWrapper>
        {MENU}
      </StyledHeaderWrapper>

      <LinkContainer name={ROUTE_LABELS.NOTES} route={ROUTE.NOTES} />
      <LinkContainer name={ROUTE_LABELS.SIGNIN} route={ROUTE.SIGNIN} />
      <LinkContainer name={ROUTE_LABELS.SIGNUP} route={ROUTE.SIGNUP} />
    </StyledNavbar>
  );
};

export default Navbar;
