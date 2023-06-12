import React, {FC, FormHTMLAttributes, PropsWithChildren} from 'react';

import {StyledFilterForm} from './styled';

const FilterForm: FC<PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>> = (
    props,
) => (
    <StyledFilterForm onSubmit={props.onSubmit}>
        {props.children}
    </StyledFilterForm>
);

export default FilterForm;
