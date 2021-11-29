import styled from 'styled-components/macro';

import { StyledLink } from '../../../../../../../styles';

export const StyledNav = styled.nav`
    ${StyledLink} {
        margin-right: 2.5rem;

        &:last-child {
            margin-right: 0;
        }
    }
`;
