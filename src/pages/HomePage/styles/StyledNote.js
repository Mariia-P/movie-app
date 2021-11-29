import styled from 'styled-components/macro';

const applyFontSize = ({theme}) => theme.variables.fontSizes.medium;

export const StyledNote = styled.p`
    font-size: ${applyFontSize};
`;
