import styled, { css } from 'styled-components/macro';
import { StyledLabel } from '../../../styles';

const applyLabelStules = ({ $labelOnTop, theme }) => {
    if ($labelOnTop) {
        const {fontSizes} = theme.variables;
        return css`
            top: -1.5rem;
            left: 0;
            font-size: ${fontSizes.small}
        `;
    }
    return css`
        top: calc(50% - 1.9rem / 2);
        left: 1.5rem;
    `;
};

export const StyledInputConteiner = styled.div`
    position: relative;

    ${StyledLabel} {
        position: absolute;
        cursor: text;
        pointer-events: none;
        transition: left 500ms ease, top 500ms ease, font-size 500ms ease;
        ${applyLabelStules}
    }
`;
