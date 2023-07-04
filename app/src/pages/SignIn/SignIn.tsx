import React, { FC } from 'react';
import { Formik } from 'formik';
import { Box, Button } from '@mui/material';

import { Form, Title, FormControlLayout } from 'components';
import {
  EMAIL_FIELD,
  EMAIL_PLACEHOLDER,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
} from 'config/globalConstants';
import { signInValidationSchema } from 'validations';
import { ROUTE } from 'config/constants/routes';
import { StyledTextField } from 'components/FilterNotes/styled';

import { INITIAL_SIGNIN, SUBMIT_BUTTON, TITLE } from './constants';
import { StyledLink, StyledWrapper } from './styled';
import { ICredentials, ISignIn } from './types';

const SignIn: FC<ISignIn> = ({ handleSubmit: handleSignIn }) => (
  <StyledWrapper>
    <Formik
      initialValues={INITIAL_SIGNIN}
      validationSchema={signInValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: ICredentials) => handleSignIn(values)}
    >
      {({ handleSubmit, handleChange, touched, values, errors }) => (
        <Form onSubmit={handleSubmit} isSignUp={false}>
          <Title variant={'h1'}>{TITLE}</Title>
          <FormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            <StyledTextField
              id={EMAIL_FIELD}
              name={EMAIL_FIELD}
              placeholder={EMAIL_PLACEHOLDER}
              type={'text'}
              variant={'outlined'}
              value={values.email}
              helperText={touched.email && errors?.email}
              error={touched.email && !!errors?.email}
              fullWidth
              onChange={handleChange}
            />
            <StyledTextField
              id={PASSWORD_FIELD}
              name={PASSWORD_FIELD}
              placeholder={PASSWORD_PLACEHOLDER}
              type={'password'}
              value={values.password}
              helperText={touched.password && errors?.password}
              margin={'normal'}
              error={touched.password && !!errors?.password}
              fullWidth
              onChange={handleChange}
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
