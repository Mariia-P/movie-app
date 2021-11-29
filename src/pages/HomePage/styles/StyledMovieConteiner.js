import styled from 'styled-components/macro';

import { StyledLink } from './StyledLink';

const { REACT_APP_STORAGE_URL } = process.env;

const applyImageUrl = ({ $imageUrl }) => REACT_APP_STORAGE_URL + $imageUrl;
const applyBackgroundColor = ({ theme }) => theme.variables.darkColors[300];

export const StyledMovieConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-image: url(${applyImageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
    text-align: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${applyBackgroundColor};
        opacity: 0;
        border-radius: 1rem;
        transition: opacity 300ms ease;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${StyledLink} {
            opacity: 1;
        }
    }
`;
