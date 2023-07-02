import styled from 'styled-components';
import { Box } from '@mui/material';

import { AboutWrapper, Wrapper } from 'pages/About/styled';
import { COLORS } from 'config/colors';

const ProfileWrapper = styled(Wrapper)({
  margin: '0 auto',
  padding: '0',
  width: '90vw',
  fontSize: '1.2rem',
});

const ProfilePageWrapper = styled(AboutWrapper)({
  width: '100%',
  height: '90%',
  padding: '0',
  h1: {
    margin: '0.5rem 0.5rem 0 0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: `2px solid ${COLORS.BORDER_COLOR}`,
  },
  '&>div:last-child': {
    width: '100%',
    height: '20vh',
    backgroundColor: COLORS.BORDER_COLOR,
  },
});

const InfoWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '0.5fr 0.5fr',
  alignItems: 'center',
  width: '50%',
  height: '55vh',
  gap: '1rem',
  margin: '3rem auto',
});

const StyledProfileInfo = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  alignItems: 'center',
  minHeight: '30vh',
  minWidth: '20%',
  '&>div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.5rem',
    borderBottom: `2px solid ${COLORS.BORDER_COLOR}`,
    '&>div:first-child': {
      alignSelf: 'end',
    },
  },
});

const StyledContainer = styled(Box)({
  display: 'flex',
  minWidth: '20%',
  minHeight: '30vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, rgb(249, 249, 249) 50%, ${COLORS.BORDER_COLOR} 50%)`,
  border: `2px solid ${COLORS.BLACK}`,
  borderRadius: '10px',
});

const StyledImageWrapper = styled(Box)({
  position: 'relative',
  minWidth: '10vw',
  minHeight: '10vw',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  left: '0',
  borderRadius: '50rem',
});

export {
  ProfileWrapper,
  ProfilePageWrapper,
  StyledProfileInfo,
  StyledImageWrapper,
  StyledImage,
  InfoWrapper,
  StyledContainer,
};
