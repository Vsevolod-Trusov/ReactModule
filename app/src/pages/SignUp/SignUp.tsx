import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Formik, FormikValues } from 'formik';

import { Form, Title, FormControlLayout, FormInput } from 'components/index';
import { signUpValidationSchema } from 'validations/signUpValidationSchema';
import { StyledWrapper } from 'pages/SignIn/styled';

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
        <Form onSubmit={handleSubmit}>
          <Title variant={'h1'}>{TITLE}</Title>
          <FormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            <FormInput
              name={FIRST_NAME_FIELD}
              placeholder={FIRSTNAME_PLACEHOLDER}
              margin={'normal'}
            />
            <FormInput
              name={LAST_NAME_FIELD}
              placeholder={LASTNAME_PLACEHOLDER}
              margin={'normal'}
            />
            <FormInput name={BIRTHDAY_FIELD} type={'date'} margin={'normal'} />
            <FormInput
              name={EMAIL_FIELD}
              placeholder={EMAIL_PLACEHOLDER}
              margin={'normal'}
            />
            <FormInput
              name={PASSWORD_FIELD}
              placeholder={PASSWORD_PLACEHOLDER}
              type={'password'}
              margin={'normal'}
            />
            <FormInput
              name={CONFIRM_PASSWORD_FIELD}
              placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
              type={'password'}
              margin={'normal'}
            />
            <Button type='submit' variant={'contained'}>
              {SUBMIT_BUTTON}
            </Button>
          </FormControlLayout>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default SignUp;
