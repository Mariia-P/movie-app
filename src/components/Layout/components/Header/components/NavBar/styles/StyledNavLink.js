import styled, { css } from 'styled-components';

import { StyledLink } from '../../../../../../../styles';

const applyDecoration = ({ theme }) => {
    const { primaryColor, secondaryColor } = theme.variables;

    return css`
        text-decoration: underline ${primaryColor};

        &:hover {
            text-decoration: underline ${secondaryColor};
        }
    `;
};

export const StyledNavLink = styled(StyledLink)`
    &.active {
        ${applyDecoration}
    }
`;
