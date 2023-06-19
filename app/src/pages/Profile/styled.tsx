import styled from 'styled-components';

import { AboutWrapper, Wrapper } from 'pages/About/styled';

import { Box } from '@mui/material';

const ProfileWrapper = styled(Wrapper)({
  margin: '0 auto',
  width: '90vw',
  fontSize: '1.2rem',
});
const ProfilePageWrapper = styled(AboutWrapper)({});
const StyledProfileInfo = styled(Box)({
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '17vh',
  gap: '20px',

  '& > div:first-child': {
    marginTop: '1rem',
  },

  '&>div': {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '50%',

    '& > div:first-child': {
      flex: 0.25,
    },
    '& > div:last-child': {
      flex: 0.25,
    },
  },
});

export { ProfileWrapper, ProfilePageWrapper, StyledProfileInfo };
