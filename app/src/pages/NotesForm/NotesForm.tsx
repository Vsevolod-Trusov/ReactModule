import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Button } from '@mui/material';

import { Title, FormInput, TextArea } from 'components/index';
import { ISignIn } from 'pages/SignIn/types';
import { noteCreationValidationSchema } from 'validations/noteCreationValidationSchema';

import {
  DESCRIPTION_FIELD,
  DESCRIPTION_PLACEHOLDER,
  NOTE_INITIAL_VALUES,
  TITLE_FIELD,
  TITLE_PLACEHOLDER,
  BUTTON_TEXT,
  DATA_FORM_ID,
} from './constants';
import {
  StyledFormWrapper,
  StyledNoteForm,
  StyledNoteFormControl,
} from './styled';

const NotesForm: FC<ISignIn> = ({ handleSubmit }) => (
  <StyledFormWrapper data-testid={DATA_FORM_ID}>
    <Formik
      initialValues={NOTE_INITIAL_VALUES}
      validationSchema={noteCreationValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <StyledNoteForm onSubmit={handleSubmit}>
          <Title variant={'h1'}>Create</Title>
          <StyledNoteFormControl
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
          </StyledNoteFormControl>
        </StyledNoteForm>
      )}
    </Formik>
  </StyledFormWrapper>
);

export default NotesForm;
