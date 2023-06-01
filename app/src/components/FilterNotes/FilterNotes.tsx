import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';

import FormControlLayout from 'components/FormControlLayout';
import {default as FilterForm} from 'components/FilterNotes/components/index';
import { ISignUp } from 'pages/SignUp/types';
import { DATE_CREATION_FIELD } from 'pages/NotesForm/constants';

import { FILTER_VALUES } from './constants';
import { filterSchema } from './validation';
import FilterInput from './components/FilterInput';

const FilterNotes: FC<ISignUp> = ({ submit: filter }) => {
  return (
    <Box>
      <Formik
        initialValues={FILTER_VALUES}
        validationSchema={filterSchema}
        onSubmit={(values: FormikValues) => filter(values)}
      >
        {
          ({ handleSubmit }) => (
            <FilterForm onSubmit={handleSubmit}>

              <FormControlLayout margin={'normal'}
                                 variant={'filled'}
                                 size={'medium'}>

                <FilterInput
                  name={DATE_CREATION_FIELD}
                  type={'date'}
                  margin={'normal'}
                />
                <Button type='submit'
                        variant={'contained'}
                >
                  Filter
                </Button>
              </FormControlLayout>
            </FilterForm>
          )}
      </Formik>
    </Box>
  );
};

export default FilterNotes;
