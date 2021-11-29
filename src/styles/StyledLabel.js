import styled from 'styled-components/macro';

const applyFontWeight = ({ theme }) => theme.variables.fontWeights.bold;

export const StyledLabel = styled.label`
font-weight: ${applyFontWeight};
`;
