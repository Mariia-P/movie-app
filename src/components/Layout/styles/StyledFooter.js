import styled, {css} from 'styled-components/macro';

const applyStyles = ({ theme }) => {
    const { backgroundColor } = theme.footer;

    return css`
        background-color: ${backgroundColor};
    `;
};

export const StyledFooter = styled.footer`
    padding: 2rem;
    text-align: center;

    ${applyStyles}
`;
