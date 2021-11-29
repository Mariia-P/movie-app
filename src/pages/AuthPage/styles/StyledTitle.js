import styled, { css } from 'styled-components';

const applyStyles = ({ theme }) => {
    const { fontSizes } = theme.variables;

    return css`
        font-size: ${fontSizes.extraLarge};
    `;
};

export const StyledTitle = styled.h3`
    margin-bottom: 3rem;
    ${applyStyles}
`;
