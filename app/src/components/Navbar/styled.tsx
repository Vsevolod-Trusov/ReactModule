import { Link, Box } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from 'config/colors';

const StyledNavbar = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  minWidth: '100%',
  maxHeight: '55px',
  alignSelf: 'center',
});

const StyledNavbarBox = styled(Box)({
  display: 'flex',
  flex: '0.2',
  justifyContent: 'center',
  minWidth: '100%',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

const StyledHeaderWrapper = styled(Box)({
  width: '100%',
  backgroundColor: COLORS.MAIN_COLOR_LIGHT,
  color: COLORS.WHITE,
  padding: '0.8rem 0',
  textAlign: 'center',
});

const StyledLink = styled(Link)({
  width: '100%',
  padding: '1rem 0',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  border: `1px solid ${COLORS.MAIN_COLOR_LIGHT}`,
  '&:hover': {
    backgroundColor: COLORS.HEADER_LINK_HOVER,
    transition: '.2s',
  },
  '&:active': {
    backgroundColor: COLORS.HEADER_LINK_ACTIVE,
    transition: '.2s',
  },
});

const StyledSelectedLink = styled(StyledLink)({
  color: `${COLORS.WHITE} !important`,
  backgroundColor: COLORS.BORDER_COLOR,
  '&:hover': {
    backgroundColor: COLORS.BORDER_COLOR_HOVER,
    transition: '.2s',
  },
  '&:active': {
    backgroundColor: COLORS.BORDER_COLOR,
    transition: '.2s',
  },
});

export {
  StyledNavbarBox,
  StyledNavbar,
  StyledHeaderWrapper,
  StyledLink,
  StyledSelectedLink,
};
