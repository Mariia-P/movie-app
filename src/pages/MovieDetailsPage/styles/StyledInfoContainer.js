import styled from 'styled-components';

const applyColor= ({ theme}) => theme.variables.lightColors[100];

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    color: ${applyColor};
    text-align: center;
    margin-left: 2rem;
`;
