import React from 'react';
import PT from 'prop-types';

import { Header } from './components';
import {
    StyledLayout,
    StyledMain,
    StyledFooter,
    StyledCopyright
} from './styles';

export const Layout = ({
    search,
    isLoading,
    onChangeSearch,
    onSearchMovies,
    children
}) => (
    <StyledLayout>
        <Header
            search={search}
            isLoading={isLoading}
            onChangeSearch={onChangeSearch}
            onSearchMovies={onSearchMovies}
        />
        <StyledMain>{children}</StyledMain>

        <StyledFooter>
            <StyledCopyright>
                All Rights Reserved, {new Date().getFullYear()}
            </StyledCopyright>
        </StyledFooter>
    </StyledLayout>
);

Layout.propTypes = {
    search: PT.string.isRequired,
    isLoading: PT.bool.isRequired,
    onChangeSearch: PT.func.isRequired,
    onSearchMovies: PT.func.isRequired,
    children: PT.node.isRequired
};
