import React, { FC } from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';

import { ROUTE_LABELS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';

import LinkContainer from './components/Link/LinkContainer';
import { StyledHeaderWrapper, StyledNavbar } from './styled';
import { INavbar } from './components/types';

const Navbar: FC<INavbar> = ({ isUserAuthorized }) => (
    <StyledNavbar>
        <StyledHeaderWrapper>
            <EventNoteIcon />
        </StyledHeaderWrapper>
        <LinkContainer
            name={ROUTE_LABELS.PROFILE}
            route={ROUTE.PROFILE}
            isNoteLink={true}
        />
        <LinkContainer
            name={ROUTE_LABELS.NOTES}
            route={ROUTE.NOTES}
            isNoteLink={true}
        />
        <LinkContainer
            name={ROUTE_LABELS.SHARED}
            route={ROUTE.SHARED}
            isNoteLink={true}
        />
        <LinkContainer name={ROUTE_LABELS.ABOUT} route={ROUTE.ABOUT} />

        {isUserAuthorized ? (
            <LinkContainer name={ROUTE_LABELS.EXIT} isExit={true} />
        ) : (
            <>
                <LinkContainer name={ROUTE_LABELS.SIGNIN} route={ROUTE.SIGNIN} />
                <LinkContainer name={ROUTE_LABELS.SIGNUP} route={ROUTE.SIGNUP} />
            </>
        )}
    </StyledNavbar>
);

export default Navbar;
