import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { Title } from 'components/index';

import { formatDate } from 'utils/formatDate';

import { ProfilePageWrapper, StyledProfileInfo } from './styled';
import { IProfile } from './types';

const Profile: FC<IProfile> = ({ firstName, lastName, email, birthday }) => {
  return (
    <ProfilePageWrapper>
      <Title variant={'h1'}>Profile</Title>
      <StyledProfileInfo>
        <Box>
          <Box>Name:</Box>
          <Box>{firstName}</Box>
        </Box>
        <Box>
          <Box>Last name:</Box>
          <Box>{lastName}</Box>
        </Box>
        <Box>
          <Box>Birthday:</Box>
          <Box>{formatDate(new Date(birthday))}</Box>
        </Box>
        <Box>
          <Box>Email:</Box>
          <Box>{email}</Box>
        </Box>
      </StyledProfileInfo>
    </ProfilePageWrapper>
  );
};

export default Profile;
