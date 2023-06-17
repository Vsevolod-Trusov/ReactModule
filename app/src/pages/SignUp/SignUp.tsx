import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { Formik, FormikValues } from 'formik';

import { Form, Title, SignUpInput } from 'components/index';
import { signUpValidationSchema } from 'validations/signUpValidationSchema';
import { StyledLink, StyledWrapper } from 'pages/SignIn/styled';
import { ROUTE } from 'config/constants/routes';

import {
  EMAIL_FIELD,
  EMAIL_PLACEHOLDER,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
} from '../constants';
import {
  BIRTHDAY_FIELD,
  CONFIRM_PASSWORD_FIELD,
  FIRST_NAME_FIELD,
  LAST_NAME_FIELD,
  SIGNUP_VALUES,
  SUBMIT_BUTTON,
  CONFIRM_PASSWORD_PLACEHOLDER,
  FIRSTNAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  TITLE,
} from './constants';
import { ISignUp } from './types';
import { StyledInputBox, StyledInputsWrapper } from './styled';

const SignUp: FC<ISignUp> = ({ submit }) => (
  <StyledWrapper>
    <Formik
      initialValues={SIGNUP_VALUES}
      validationSchema={signUpValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => submit(values)}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} isSignUp={true}>
          <Title variant={'h1'}>{TITLE}</Title>
          <StyledInputsWrapper>
            <StyledInputBox>
              <SignUpInput
                name={FIRST_NAME_FIELD}
                placeholder={FIRSTNAME_PLACEHOLDER}
                margin={'normal'}
              />
              <SignUpInput
                name={LAST_NAME_FIELD}
                placeholder={LASTNAME_PLACEHOLDER}
                margin={'normal'}
              />
              <SignUpInput
                name={BIRTHDAY_FIELD}
                type={'date'}
                margin={'normal'}
              />
            </StyledInputBox>
            <StyledInputBox>
              <SignUpInput
                name={EMAIL_FIELD}
                placeholder={EMAIL_PLACEHOLDER}
                margin={'normal'}
              />
              <SignUpInput
                name={PASSWORD_FIELD}
                placeholder={PASSWORD_PLACEHOLDER}
                type={'password'}
                margin={'normal'}
              />
              <SignUpInput
                name={CONFIRM_PASSWORD_FIELD}
                placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
                type={'password'}
                margin={'normal'}
              />
            </StyledInputBox>
          </StyledInputsWrapper>
          <Box>
            <Button type='submit' variant={'contained'}>
              {SUBMIT_BUTTON}
            </Button>
          </Box>
          <Box>
            <StyledLink to={ROUTE.LINK_SIGN_IN}>Sign in?</StyledLink>
          </Box>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default SignUp;
