import styled, {css} from 'styled-components';

const applyFontStyles = ({ theme }) => {
const {fontWeights, fontSizes} = theme.variables;
return css`
font-size: ${fontSizes.extraLarge};
font-weight: ${fontWeights.bold};
`
};

export const StyledTitle = styled.h1`
  ${applyFontStyles}; 
  margin-bottom: 2rem; 
`;
