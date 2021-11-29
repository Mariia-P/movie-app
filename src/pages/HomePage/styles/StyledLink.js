import styled, {css} from 'styled-components/macro';

import { StyledLink as StyledBaseLink} from '../../../styles';

const applyStyles = ({theme}) => {
const {primaryColor, secondaryColor, fontSizes} = theme.variables;

return css`
font-size: ${fontSizes.large};
border: 0.2rem solid ${primaryColor};

&:hover{
border: 0.2rem solid ${secondaryColor};
}
`
};

export const StyledLink = styled(StyledBaseLink)`
${applyStyles}

text-decoration: none;
padding: .3rem;
position: relative;
z-index: 1;
opacity: 0;
transition: opacity 300 ms ease, color 200 ms ease, border-color 200ms ease;
    
`;
