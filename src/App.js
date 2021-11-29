import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { HomePage, MovieDetailsPage, AuthPage, LogoutPage } from './pages';
import { Layout, ErrorBoundary } from './components';
import { GlobalReset } from './styles';
import {authenticateUser} from './store';
import { lightTheme } from './themes';

const { REACT_APP_MOVIEDB_API_KEY, REACT_APP_MOVIEDB_URL } = process.env;

// console.log('[store]', store);
const authSelector = state => !!state.auth.idToken;

export const App = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
const dispatch = useDispatch();

    useEffect(() => {
       const idToken = localStorage.getItem('idToken');
       const localId = localStorage.getItem('localId');
       if(!idToken || !localId) return;
       dispatch(authenticateUser(idToken, localId));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isAuthanticated = useSelector(authSelector);

    const handleChangeSearchValue = e => {
        setSearch(e.target.value);
    };

    const fetchMovies = async searchQuery => {
        try {
            setIsLoading(true);

            const url = `${REACT_APP_MOVIEDB_URL}/search/movie?api_key=${REACT_APP_MOVIEDB_API_KEY}&query=${searchQuery}`;

            const {
                data: { results }
            } = await axios.get(url);
            setMovies(results);
        } catch (e) {
            console.log('[e]', e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchMovies = () => fetchMovies(search);

    return (
        <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
                <ErrorBoundary>
                    <GlobalReset />
                    <Layout
                        search={search}
                        isLoading={isLoading}
                        onChangeSearch={handleChangeSearchValue}
                        onSearchMovies={handleSearchMovies}
                    >
                        <Switch>
                            {isAuthanticated ? (
                                <>
                                    <Route path="/" exact>
                                        <HomePage movies={movies} />
                                    </Route>

                                    <Route path="/movie/:movieId">
                                        <MovieDetailsPage movies={movies} />
                                    </Route>

                                    <Route path="/logout">
                                        <LogoutPage />
                                    </Route>

                                    <Redirect from="/auth" to="/" />
                                </>
                            ) : (
                                <>
                                    <Route path="/auth">
                                        <AuthPage />
                                    </Route>

                                    <Redirect to="/auth" />
                                </>
                            )}
                        </Switch>
                    </Layout>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    );
};
