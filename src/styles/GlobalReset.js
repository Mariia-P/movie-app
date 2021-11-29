import { createGlobalStyle } from 'styled-components/macro';

export const GlobalReset = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
font-size: 62.5%;
height: 100%;
}

body {
    font-size: ${props => props.theme.variables.fontSizes.normal};
    font-weight: ${props => props.theme.variables.fontWeights.normal};
    font-family: ${props => props.theme.variables.fontFamilies.main};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.theme.variables.darkColors[900]};
  height: 100%;
}

button {
    cursor: pointer;
}

input,
button,
textarea {
    font-size:${props => props.theme.variables.fontSizes.normal};
    font-family: ${props => props.theme.variables.fontFamilies.main};
}

ul, ol {
    list-style-type: none;
}
fieldset{
    border: none;
}
#root {
    height: 100%;
}
`;
