import styled, { css } from 'styled-components/macro';

const applyColor = ({ theme }) => theme.button.color;
const applyDisabledStyles = ({ theme }) => {
    const { lightColors } = theme.variables;

    return css`
    background-color: ${lightColors[300]};
    
    `
};

const applyStyles = ({ $primary, $secondary, theme }) => {
    const {
        primaryColor,
        secondaryColor,
        primaryColorDark,
        secondaryColorDark
    } = theme.variables;

    switch (true) {
        case $primary:
            return css`
                background-color: ${primaryColor};

                &:hover,
                &:focus {
                    background-color: ${primaryColorDark};
                }
            `;
        case $secondary:
            return css`
                background-color: ${secondaryColor};

                &:hover {
                    background-color: ${secondaryColorDark};
                }
            `;
        default:
            return;
    }
};

export const StyledButton = styled.button`
    ${applyStyles}

    cursor: pointer;
    color: ${applyColor};
    font-size: 1.6rem;
    border: none;
    outline: none;
    padding: 1.4rem 2.3rem;
    border-radius: 0.4rem;
    transition: background-color 200ms ease, color 200ms ease;

    &:disabled {
        cursor: not-allowed;
        ${applyDisabledStyles}
    }
`;
