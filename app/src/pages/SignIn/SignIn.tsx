import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';

import { FormInput, Form, Title, FormControlLayout } from 'components';
import {
  EMAIL_FIELD,
  EMAIL_PLACEHOLDER,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
} from 'config/globalConstants';
import { signInValidationSchema } from 'validations';
import { ROUTE } from 'config/constants/routes';

import { INITIAL_SIGNIN, SUBMIT_BUTTON, TITLE } from './constants';
import { StyledLink, StyledWrapper } from './styled';
import { ISignIn } from './types';

const SignIn: FC<ISignIn> = ({ handleSubmit: handleSignIn }) => (
  <StyledWrapper>
    <Formik
      initialValues={INITIAL_SIGNIN}
      validationSchema={signInValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => handleSignIn(values)}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} isSignUp={false}>
          <Title variant={'h1'}>{TITLE}</Title>
          <FormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            <FormInput name={EMAIL_FIELD} placeholder={EMAIL_PLACEHOLDER} />
            <FormInput
              name={PASSWORD_FIELD}
              placeholder={PASSWORD_PLACEHOLDER}
              type={'password'}
            />
            <Button type='submit' variant={'contained'}>
              {SUBMIT_BUTTON}
            </Button>
            <Box>
              <StyledLink to={ROUTE.SIGN_UP}>Sign up?</StyledLink>
            </Box>
          </FormControlLayout>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default SignIn;
