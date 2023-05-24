import React, { FC } from 'react';
import { List, Box, ListItemText, ListItem, Grid } from '@mui/material';

import Title from 'components/Title';

import { AboutWrapper } from './styled';
import { FEATURES, FUTURES } from './constants';

const About: FC = () => {
  return (
    <AboutWrapper>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <Box>
              <Title variant={'h5'}>Features:</Title>
              <Box>
                <List>
                  {
                    (FEATURES.map((name: string) => (
                      <ListItem key={name}>
                        <ListItemText primary={name} />
                      </ListItem>
                    )))
                  }
                </List>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Box>
              <Title variant={'h5'}>Future plans:</Title>
              <Box>
                <List>
                  {
                    (FUTURES.map((name: string) => (
                      <ListItem key={name}>
                        <ListItemText primary={name} />
                      </ListItem>
                    )))
                  }
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </AboutWrapper>
  );
};

export default About;
