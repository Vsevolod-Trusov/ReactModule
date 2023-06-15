import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { ISignUp } from 'pages/SignUp/types';
import {
  DATE_CREATION_FIELD,
  TITLE_FIELD,
  TITLE_PLACEHOLDER,
} from 'pages/NotesForm/constants';
import { filterSchema } from 'validations/filterSchema';
import { filterByNameSchema } from 'validations/filterByNameSchema';

import { FILTER_VALUES, FILTER_BY_NAME_VALUES } from './constants';

import { FilterForm, FilterInput } from './components';
import { StyledFormControlLayout } from './styled';

const FilterNotes: FC<ISignUp> = ({
  submit: filter,
  handleRefresh,
  filterByName,
}) => (
  <Box>
    <Formik
      initialValues={filterByName ? FILTER_BY_NAME_VALUES : FILTER_VALUES}
      validationSchema={filterByName ? filterByNameSchema : filterSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => filter(values)}
    >
      {({ handleSubmit, handleChange }) => (
        <FilterForm onSubmit={handleSubmit}>
          <StyledFormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            {filterByName ? (
              <>
                <FilterInput
                  name={TITLE_FIELD}
                  placeholder={TITLE_PLACEHOLDER}
                  margin={'normal'}
                />
                <Button type='submit' variant={'contained'}>
                  <FilterAltIcon />
                </Button>
              </>
            ) : (
              <>
                <FilterInput
                  name={DATE_CREATION_FIELD}
                  type={'date'}
                  margin={'normal'}
                  onChange={(e) => {
                    handleChange(e);
                    setTimeout(() => {
                      handleSubmit();
                    }, 10);
                  }}
                />
                <Button
                  type='button'
                  variant={'contained'}
                  onClick={() => {
                    handleRefresh();
                  }}
                >
                  <RefreshIcon />
                </Button>
              </>
            )}
          </StyledFormControlLayout>
        </FilterForm>
      )}
    </Formik>
  </Box>
);

export default FilterNotes;
