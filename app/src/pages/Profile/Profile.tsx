import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { Title } from 'components/index';
import { formatDate } from 'utils/formatDate';
import profile from 'assets/images/profile.png';

import {
  ProfilePageWrapper,
  StyledProfileInfo,
  StyledImage,
  StyledImageWrapper,
  InfoWrapper,
} from './styled';
import { IProfile } from './types';

const Profile: FC<IProfile> = ({ firstName, lastName, email, birthday }) => {
  return (
    <ProfilePageWrapper>
      <Title variant={'h1'}>Profile</Title>
      <InfoWrapper>
        <StyledImageWrapper>
          <StyledImage src={profile} />
        </StyledImageWrapper>
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
      </InfoWrapper>
    </ProfilePageWrapper>
  );
};

export default Profile;
