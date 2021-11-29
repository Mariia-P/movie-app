import styled from 'styled-components';

import { StyledInputConteiner } from '../../../components/FormInput';

const applyBackgroundColor = ({theme}) => theme.variables.lightColors[100];

export const StyledFormContainer = styled.div`
max-width: 40rem;
width: 100%;
    background-color: ${applyBackgroundColor};
    padding: 2.5rem;
    border-radius: 0.5rem;
  text-align: center;

    ${StyledInputConteiner} {
        margin-bottom: 3rem;
    }
`;
