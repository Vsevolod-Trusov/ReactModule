import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Formik, FormikValues } from 'formik';

import Form from 'components/Form';
import Title from 'components/Title';
import FormControlLayout from 'components/FormControlLayout';
import FormInput from 'components/FormInput';
import { StyledWrapper } from 'pages/SignIn/styled';

import { EMAIL_FIELD, PASSWORD_FIELD } from '../constants';
import {
  BIRTHDAY_FIELD,
  CONFIRM_PASSWORD_FIELD,
  FIRST_NAME_FIELD,
  LAST_NAME_FIELD,
  SIGNUP_VALUES,
} from './constants';
import { signUpValidationSchema } from './validation';
import { ISignUp } from './types';

const SignUp: FC<ISignUp> = ({ submit }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={SIGNUP_VALUES}
        validationSchema={signUpValidationSchema}
        onSubmit={(values: FormikValues) => submit(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Title variant={'h1'}>Sign Up</Title>

            <FormControlLayout
              margin={'normal'}
              variant={'filled'}
              size={'medium'}
            >
              <FormInput
                name={FIRST_NAME_FIELD}
                placeholder='Enter first name'
                margin={'normal'}
              />

              <FormInput
                name={LAST_NAME_FIELD}
                placeholder='Enter last name'
                margin={'normal'}
              />

              <FormInput
                name={BIRTHDAY_FIELD}
                type={'date'}
                margin={'normal'}
              />

              <FormInput
                name={EMAIL_FIELD}
                placeholder='Enter email'
                margin={'normal'}
              />

              <FormInput
                name={PASSWORD_FIELD}
                placeholder='Enter password'
                type={'password'}
                margin={'normal'}
              />

              <FormInput
                name={CONFIRM_PASSWORD_FIELD}
                placeholder='Confirm password'
                type={'password'}
                margin={'normal'}
              />

              <Button type='submit' variant={'contained'}>
                Submit
              </Button>
            </FormControlLayout>
          </Form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default SignUp;
