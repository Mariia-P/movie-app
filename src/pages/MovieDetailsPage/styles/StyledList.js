import styled from 'styled-components';

import { StyledLink } from '../../../styles';

const applyOutlineColor = ({ theme }) => theme.variables.primaryColorDark;

export const StyledList = styled.ul`
    display: flex;
    position: relative;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    z-index: 1;
    margin-top: 2rem;

    ${StyledLink} {
        &:hover {
            outline-offset: .3rem;
            outline: .2rem solid ${applyOutlineColor};
        }
    }
`;
