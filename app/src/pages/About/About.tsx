import React, { FC } from 'react';
import { List, Box, ListItemText, ListItem } from '@mui/material';

import { Title } from 'components';

import { Wrapper, AboutWrapper, AboutContainer, StyledBox } from './styled';
import { ABOUT_TITLES, FEATURES, FUTURES } from './constants';

const About: FC = () => (
  <Wrapper>
    <AboutWrapper>
      <AboutContainer>
        <StyledBox />
        <Box>
          <Title variant={'h5'}>{ABOUT_TITLES.FEATURES}</Title>
          <Box>
            <List>
              {FEATURES.map((name: string) => (
                <ListItem key={name}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box>
          <Title variant={'h5'}>{ABOUT_TITLES.FUTURE}</Title>
          <Box>
            <List>
              {FUTURES.map((name: string) => (
                <ListItem key={name}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <StyledBox />
      </AboutContainer>
    </AboutWrapper>
  </Wrapper>
);

export default About;
