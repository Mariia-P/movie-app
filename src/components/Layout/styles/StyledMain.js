import styled from 'styled-components/macro';

const applyBackground = ({theme }) => theme.main.background;

export const StyledMain = styled.main`
    flex-grow: 1;
    background: ${applyBackground};
`;
