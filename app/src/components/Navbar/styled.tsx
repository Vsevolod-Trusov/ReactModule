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
  backgroundColor: COLORS.BORDER_COLOR,
  color: COLORS.WHITE,
  padding: '0.8rem 0',
  textAlign: 'center',
});

const StyledLink = styled(Link)({
  width: '100%',
  padding: '1rem 0',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  outline: '1px solid #0b31be',
  '&:hover': {
    backgroundColor: COLORS.HEADER_LINK_HOVER,
    transition: '.2s',
  },
});

export { StyledNavbarBox, StyledNavbar, StyledHeaderWrapper, StyledLink };
