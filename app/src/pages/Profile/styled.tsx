import styled from 'styled-components';
import { Box } from '@mui/material';

import { AboutWrapper, Wrapper } from 'pages/About/styled';

const ProfileWrapper = styled(Wrapper)({
  margin: '0 auto',
  width: '90vw',
  fontSize: '1.2rem',
});
const ProfilePageWrapper = styled(AboutWrapper)({
  width: '100%',
  height: '90%',
});
const InfoWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '50%',
});
const StyledProfileInfo = styled(Box)({
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '17vh',
  minWidth: '40%',
  gap: '35px',

  '&>div': {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '95%',

    '& > div:first-child': {
      flex: 0.25,
    },
    '& > div:last-child': {
      flex: 0.25,
    },
  },
});

const StyledImageWrapper = styled(Box)({
  position: 'relative',
  minWidth: '15vw',
  minHeight: '15vw',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  left: '0',
});

export {
  ProfileWrapper,
  ProfilePageWrapper,
  StyledProfileInfo,
  StyledImageWrapper,
  StyledImage,
  InfoWrapper,
};
