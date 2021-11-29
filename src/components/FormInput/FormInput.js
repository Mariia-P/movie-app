import React from 'react';
import PT from 'prop-types';

import { StyledInput, StyledLabel } from '../../styles';
import { StyledInputConteiner } from './styles';

export const FormInput = ({label, value, ...other}) => {
const hasValue = !!value;

    return (
        <StyledInputConteiner $labelOnTop={hasValue}>
            <StyledLabel> {label}</StyledLabel>
            <StyledInput data-testid="test-input" value={value} {...other} />
        </StyledInputConteiner>
    );
}

FormInput.propTypes = {
   label: PT.string.isRequired,
   value: PT.string,
   onChange: PT.func 
};