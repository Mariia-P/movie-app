import styled from 'styled-components/macro';

const applyBorderColor = ({theme}) => theme.input.borderColor;
const applyBorderColorFocus = ({theme}) => theme.input.borderColorFocus;

export const StyledInput = styled.input.attrs({
    type: 'text'
})`
display: block;
width: 100%;
    outline: none;
    border: none;
    border-bottom: .2rem solid ${applyBorderColor};
    padding: 1.3rem 1.5rem;
    transition: border-color 200ms ease;

    &:focus {
        border-color: ${applyBorderColorFocus};
    }
`;
