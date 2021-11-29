import React from 'react';
import PT from 'prop-types';
import { useSelector } from 'react-redux';


import { FormInput } from '../../../FormInput';
import { StyledHeader, StyledSearchConteiner, StyledTitle } from './styles';
import { NavBar } from './components';
import {
    StyledButton,
    StyledWidthLimiter,
    
} from '../../../../styles';


const authSelector = state => !!state.auth.idToken;

export const Header = ({
    search,
    isLoading,
    onChangeSearch,
    onSearchMovies
}) => {

    const isAuthanticated =  useSelector(authSelector);
    return (
        <StyledHeader>
            <StyledWidthLimiter>
                {isAuthanticated ? (<>
                <StyledSearchConteiner>
                    <FormInput
                        label="Search"
                        value={search}
                        onChange={onChangeSearch}
                    />
                    <StyledButton
                        $primary
                        disabled={isLoading}
                        onClick={onSearchMovies}
                    >
                        {isLoading ? 'Searching' : 'Search'}
                    </StyledButton>
                </StyledSearchConteiner>
                <NavBar />
                
                </>):(
                    <StyledTitle>Welcom to our app!</StyledTitle>
                )}
                
            </StyledWidthLimiter>
        </StyledHeader>
    );
};

Header.propTypes = {
    search: PT.string.isRequired,
    isLoading: PT.bool.isRequired,
    onChangeSearch: PT.func.isRequired,
    onSearchMovies: PT.func.isRequired
};
