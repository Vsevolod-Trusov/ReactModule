import React, { FC } from 'react';
import { EventNote } from '@mui/icons-material';

import { ROUTE_LABELS } from 'config/globalConstants';
import { ROUTE } from 'config/constants/routes';

import LinkContainer from './components/Link/LinkContainer';
import { StyledHeaderWrapper, StyledNavbar } from './styled';
import { INavbar } from './components/types';

const Navbar: FC<INavbar> = ({
  isUserAuthorized,
  isProfile,
  isNotes,
  isShared,
  isAbout,
  isSignIn,
  isSignUp,
}) => (
  <StyledNavbar>
    <StyledHeaderWrapper>
      <EventNote />
    </StyledHeaderWrapper>
    <LinkContainer
      name={ROUTE_LABELS.PROFILE}
      route={ROUTE.PROFILE}
      isNoteLink={true}
      isSelectedNow={isProfile}
    />
    <LinkContainer
      name={ROUTE_LABELS.NOTES}
      route={ROUTE.NOTES}
      isNoteLink={true}
      isSelectedNow={isNotes}
    />
    <LinkContainer
      name={ROUTE_LABELS.SHARED}
      route={ROUTE.SHARED}
      isNoteLink={true}
      isSelectedNow={isShared}
    />
    <LinkContainer
      name={ROUTE_LABELS.ABOUT}
      route={ROUTE.ABOUT}
      isSelectedNow={isAbout}
    />

    {isUserAuthorized ? (
      <LinkContainer name={ROUTE_LABELS.EXIT} isExit={true} />
    ) : (
      <>
        <LinkContainer
          name={ROUTE_LABELS.SIGN_IN}
          route={ROUTE.SIGN_IN}
          isSelectedNow={isSignIn}
        />
        <LinkContainer
          name={ROUTE_LABELS.SIGN_UP}
          route={ROUTE.SIGN_UP}
          isSelectedNow={isSignUp}
        />
      </>
    )}
  </StyledNavbar>
);

export default Navbar;
