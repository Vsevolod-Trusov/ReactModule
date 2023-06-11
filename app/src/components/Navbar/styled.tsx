import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import { COLORS } from 'pages/colors';

const StyledNavbar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',

  borderRight: `1px solid ${COLORS.BORDER_COLOR}`,
  outline: `1px solid #0b31be`,
});

const StyledNavbarBox = styled(Box)({
  flex: '0.2',
});

const StyledHeaderWrapper = styled(Box)({
  width: '100%',

  backgroundColor: '#0b31be',
  color: '#fff',

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
    backgroundColor: '#ece9e9',
    transition: '.2s',
  },
});

export { StyledNavbarBox, StyledNavbar, StyledHeaderWrapper, StyledLink };
