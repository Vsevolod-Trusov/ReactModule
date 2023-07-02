import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { Title } from 'components';
import { formatDate } from 'utils';
import profile from 'assets/images/profile.png';

import {
  ProfilePageWrapper,
  StyledProfileInfo,
  StyledImage,
  StyledImageWrapper,
  InfoWrapper,
  StyledContainer,
} from './styled';
import { IProfile } from './types';
import { FIELDS } from './constants';

const Profile: FC<IProfile> = ({ firstName, lastName, email, birthday }) => (
  <ProfilePageWrapper>
    <Title variant={'h1'}>Profile</Title>
    <InfoWrapper>
      <StyledContainer>
        <StyledImageWrapper>
          <StyledImage src={profile} />
        </StyledImageWrapper>
      </StyledContainer>
      <StyledProfileInfo>
        <Box>
          <Box>{FIELDS.NAME}</Box>
          <Box>{firstName}</Box>
        </Box>
        <Box>
          <Box>{FIELDS.LAST_NAME}</Box>
          <Box>{lastName}</Box>
        </Box>
        <Box>
          <Box>{FIELDS.BIRTHDAY}</Box>
          <Box>{formatDate(new Date(birthday))}</Box>
        </Box>
        <Box>
          <Box>{FIELDS.EMAIL}</Box>
          <Box>{email}</Box>
        </Box>
      </StyledProfileInfo>
    </InfoWrapper>
    <Box />
  </ProfilePageWrapper>
);

export default Profile;
