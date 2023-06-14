import React, { FC } from 'react';

import { MENU, ROUTE_LABELS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';

import LinkContainer from './components/Link/LinkContainer';
import { StyledHeaderWrapper, StyledNavbar } from './styled';

const Navbar: FC = () => (
  <StyledNavbar>
    <StyledHeaderWrapper>{MENU}</StyledHeaderWrapper>
    <LinkContainer
      name={ROUTE_LABELS.NOTES}
      route={ROUTE.NOTES}
      isNoteLink={true}
    />
    <LinkContainer name={ROUTE_LABELS.NOTES_FORM} route={ROUTE.NOTES_FORM} />
    <LinkContainer
      name={ROUTE_LABELS.SHARED}
      route={ROUTE.SHARED}
      isNoteLink={true}
    />
    <LinkContainer name={ROUTE_LABELS.ABOUT} route={ROUTE.ABOUT} />
    <LinkContainer name={ROUTE_LABELS.SIGNIN} route={ROUTE.SIGNIN} />
    <LinkContainer name={ROUTE_LABELS.SIGNUP} route={ROUTE.SIGNUP} />
    <LinkContainer name={ROUTE_LABELS.EXIT} isExit={true} />
  </StyledNavbar>
);

export default Navbar;
