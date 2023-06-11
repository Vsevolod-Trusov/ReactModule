import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Button } from '@mui/material';

import Title from 'components/Title/Title';
import FormControlLayout from 'components/FormControlLayout';
import FormInput from 'components/FormInput';
import { default as TextArea } from 'components/TextArea/index';
import Form from 'components/Form';
import { ISignIn } from 'pages/SignIn/types';
import { StyledWrapper } from 'pages/SignIn/styled';

import {
  DATE_CREATION_FIELD,
  DESCRIPTION_FIELD,
  DESCRIPTION_PLACEHOLDER,
  NOTE_INITIAL_VALUES,
  TITLE_FIELD,
  TITLE_PLACEHOLDER,
  BUTTON_TEXT,
  DATA_FORM_ID,
} from './constants';
import { noteCreationValidationSchema } from './validation';

const NotesForm: FC<ISignIn> = ({ handleSubmit }) => {
  return (
    <StyledWrapper data-testid={DATA_FORM_ID}>
      <Formik
        initialValues={NOTE_INITIAL_VALUES}
        validationSchema={noteCreationValidationSchema}
        onSubmit={(values: FormikValues) => handleSubmit(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Title variant={'h1'}>Create</Title>

            <FormControlLayout
              margin={'normal'}
              variant={'filled'}
              size={'medium'}
              data-testid={'form'}
            >
              <FormInput
                name={TITLE_FIELD}
                placeholder={TITLE_PLACEHOLDER}
                margin={'normal'}
              />

              <FormInput
                name={DATE_CREATION_FIELD}
                type={'date'}
                margin={'normal'}
                data-testid={'date'}
              />

              <FormInput
                name={DESCRIPTION_FIELD}
                value={values.description}
                onChange={handleChange}
                placeholder={DESCRIPTION_PLACEHOLDER}
                margin={'normal'}
                as={TextArea}
              ></FormInput>

              <Button type='submit' variant={'contained'}>
                {BUTTON_TEXT}
              </Button>
            </FormControlLayout>
          </Form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default NotesForm;
