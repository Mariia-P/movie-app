import styled, { css } from 'styled-components/macro';
import { StyledWidthLimiter } from '../../../../../styles';

const applyStyles = ({ theme }) => {
    const { backgroundColor } = theme.header;

    return css`
        background-color: ${backgroundColor};
    `;
};

export const StyledHeader = styled.header`
    padding: 2rem;

    ${applyStyles}

    ${StyledWidthLimiter} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
