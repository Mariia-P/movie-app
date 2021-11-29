import * as variables from './variables';

export const theme = {
    variables,
    input: {
        borderColor: variables.lightColors[300],
        borderColorFocus: variables.primaryColor
    },
    button: {
        color: variables.lightColors[100]
    },
    header: {
        backgroundColor: variables.lightColors[100]
    },
    main: {
        background: `linear-gradient(to right, ${variables.secondaryColor}, ${variables.primaryColor})`
    },
    footer: {
        backgroundColor: variables.lightColors[100]
    }
};
