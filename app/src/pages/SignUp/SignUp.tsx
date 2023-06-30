import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { Formik, FormikValues } from 'formik';

import { Title } from 'components';
import { signUpValidationSchema } from 'validations';
import { SignUpForm, StyledLink, StyledWrapper } from 'pages/SignIn/styled';
import { ROUTE } from 'config/constants/routes';

import {
  EMAIL_FIELD,
  EMAIL_PLACEHOLDER,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
} from 'config/globalConstants';
import { StyledTextField } from 'components/FilterNotes/styled';

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
import { StyledInputsWrapper } from './styled';
import { EMPTY_LINE } from '../NoteList/constants';

const SignUp: FC<ISignUp> = ({ submit }) => (
  <StyledWrapper>
    <Formik
      initialValues={SIGNUP_VALUES}
      validationSchema={signUpValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => submit(values)}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <SignUpForm onSubmit={handleSubmit}>
          <Title variant={'h1'}>{TITLE}</Title>
          <StyledInputsWrapper>
            <Box>
              <StyledTextField
                id={FIRST_NAME_FIELD}
                name={FIRST_NAME_FIELD}
                placeholder={FIRSTNAME_PLACEHOLDER}
                type={'text'}
                value={values.firstName}
                helperText={
                  touched.firstName && `${errors?.firstName || EMPTY_LINE}`
                }
                margin={'normal'}
                fullWidth
                error={touched.firstName && !!errors?.firstName}
                onChange={handleChange}
              />
              <StyledTextField
                id={LAST_NAME_FIELD}
                name={LAST_NAME_FIELD}
                placeholder={LASTNAME_PLACEHOLDER}
                type={'text'}
                value={values.lastName}
                helperText={
                  touched.lastName && `${errors?.lastName || EMPTY_LINE}`
                }
                margin={'normal'}
                error={touched.lastName && !!errors?.lastName}
                fullWidth
                onChange={handleChange}
              />
              <StyledTextField
                id={BIRTHDAY_FIELD}
                name={BIRTHDAY_FIELD}
                type={'date'}
                margin={'normal'}
                value={values.birthday}
                helperText={
                  touched.birthday && `${errors?.birthday || EMPTY_LINE}`
                }
                error={touched.birthday && !!errors?.birthday}
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <Box>
              <StyledTextField
                id={EMAIL_FIELD}
                name={EMAIL_FIELD}
                type={'text'}
                margin={'normal'}
                placeholder={EMAIL_PLACEHOLDER}
                value={values.email}
                helperText={touched.email && `${errors?.email || EMPTY_LINE}`}
                error={touched.email && !!errors?.email}
                fullWidth
                onChange={handleChange}
              />
              <StyledTextField
                id={PASSWORD_FIELD}
                name={PASSWORD_FIELD}
                placeholder={PASSWORD_PLACEHOLDER}
                type={'password'}
                margin={'normal'}
                value={values.password}
                helperText={
                  touched.password && `${errors?.password || EMPTY_LINE}`
                }
                error={touched.password && !!errors?.password}
                fullWidth
                onChange={handleChange}
              />
              <StyledTextField
                id={CONFIRM_PASSWORD_FIELD}
                name={CONFIRM_PASSWORD_FIELD}
                placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
                type={'password'}
                margin={'normal'}
                value={values.confirmPassword}
                helperText={
                  touched.confirmPassword &&
                  `${errors?.confirmPassword || EMPTY_LINE}`
                }
                error={touched.confirmPassword && !!errors?.confirmPassword}
                fullWidth
                onChange={handleChange}
              />
            </Box>
          </StyledInputsWrapper>
          <Box>
            <Button type='submit' variant={'contained'}>
              {SUBMIT_BUTTON}
            </Button>
          </Box>
          <Box>
            <StyledLink to={ROUTE.SIGN_IN}>Sign in?</StyledLink>
          </Box>
        </SignUpForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default SignUp;
