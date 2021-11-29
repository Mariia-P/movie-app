import styled from 'styled-components';

const {REACT_APP_STORAGE_URL} = process.env;

const applyBackdropImage = ({ $imageUrl }) => REACT_APP_STORAGE_URL + $imageUrl;
const applyBackdropColor = ({theme}) => theme.variables.darkColors[600];

export const StyledMovieDetails = styled.div`
    padding: 2rem;
    background-image: url(${applyBackdropImage});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${applyBackdropColor};

    }
`;
