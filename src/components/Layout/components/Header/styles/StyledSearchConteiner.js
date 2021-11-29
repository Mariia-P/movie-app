import styled from 'styled-components/macro';

import { StyledInputConteiner } from '../../../../FormInput';

export const StyledSearchConteiner = styled.div`
    display: flex;
    align-items: center;
    

    ${StyledInputConteiner}{
        flex-grow: 1;
        margin-right: 2rem;
        max-width: 33rem;
    width: 100%;
    }
`;
