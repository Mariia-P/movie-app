import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

const applyStyles = ({ theme }) => {
    const { primaryColor, secondaryColor, fontSizes } = theme.variables;

    return css`
        font-size: ${fontSizes.large};
        color: ${primaryColor};

        &:hover
         {
            color: ${secondaryColor};
        }

        &&&:focus {
            outline: .2rem solid ${secondaryColor};
        }
    `;
};

export const StyledLink = styled(Link)`
    ${applyStyles}

    text-decoration: none;
    transition: color 200 ms ease, border-color 200ms ease;
`;
