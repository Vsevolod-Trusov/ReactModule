import React, { FC } from 'react';
import { Button } from '@mui/material';

import { IErrorPage } from './types';
import { StyledErrorPage, StyledWrapper } from './styled';

export const ErrorPage: FC<IErrorPage> = ({ handleBack }) => (
  <StyledErrorPage>
    <StyledWrapper>Oops!</StyledWrapper>
    <StyledWrapper>Sorry, undefined route.</StyledWrapper>
    <StyledWrapper>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleBack}
      >
        Back
      </Button>
    </StyledWrapper>
  </StyledErrorPage>
);
