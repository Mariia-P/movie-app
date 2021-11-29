import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';

import { StyledNav, StyledNavLink } from './styles';
const LINKS = [
    {
        id: 1,
        url: '/',
        exact: true,
        text: 'Home'
    },

    {
        id: 2,
        url: '/favorite',
        text: 'Favorite'
    },
    {
        id: 3,
        url: '/auth',
        text: 'Auth'
    },
    {
        id: 4,
        url: '/logout',
        text: 'Logout'
    }
];

const authSelector =  state=> !!state.auth.idToken;

export const NavBar = () => {
    const isAuthanticated = useSelector(authSelector);
    // console.log('[isAuthanticated]', isAuthanticated);
    return (
        <StyledNav>
            {LINKS.filter(({ id }) => isAuthanticated && id!==3).map(
                ({ id, url, exact, text }) => ( 
                    <StyledNavLink as={NavLink} exact={exact} key={id} to={url}>
                        {text}
                    </StyledNavLink>
                )
            )}
        </StyledNav>
    );
};
