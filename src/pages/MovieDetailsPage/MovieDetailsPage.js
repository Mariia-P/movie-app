import React from 'react';
import PT from 'prop-types';
// import {Redirect, useParams} from 'react-router-dom';

import { StyledButton, StyledLink } from '../../styles';

import {
    StyledContainer,
    StyledMovieDetails,
    StyledContent,
    StyledPoster,
    StyledInfoContainer,
    StyledInfo,
    StyledOwerview,
    StyledTitle,
    StyledReleaseDate,
    StyledList,
    StyledSimilarMoviePoster
} from './styles';
import { useMovieDetailsAndSimilarMovies } from './hooks';

const { REACT_APP_STORAGE_URL } = process.env;

// const { REACT_APP_MOVIEDB_API_KEY, REACT_APP_MOVIEDB_URL } = process.env;

export const MovieDetailsPage = ({ movies }) => {
    const { movie, similarMovies } = useMovieDetailsAndSimilarMovies(movies);

    if (!movie || !similarMovies.length) return null;
    console.log('[movie]', movie);
    console.log('[sim-movie]', similarMovies);
    const {
        original_title,
        poster_path,
        backdrop_path,
        overview,
        release_date
    } = movie;

    //    if (!movieDetails) return <Redirect to="/" />
    return (
        <StyledContainer>
            <StyledMovieDetails $imageUrl={backdrop_path}>
                <StyledContent>
                    <StyledPoster
                        src={REACT_APP_STORAGE_URL + poster_path}
                        alt={original_title}
                    />
                    <StyledInfoContainer>
                        <StyledInfo>
                            <StyledTitle>{original_title}</StyledTitle>
                            <StyledReleaseDate>
                                {release_date}
                            </StyledReleaseDate>
                            <StyledOwerview>{overview}</StyledOwerview>
                        </StyledInfo>

                        <StyledButton $primary>Add to Favorite</StyledButton>
                    </StyledInfoContainer>
                </StyledContent>

                {similarMovies.length > 0 && (
                    <StyledList>
                        {similarMovies.map(
                            ({ id, original_title, poster_path }) => {
                                const imageUrl =
                                    REACT_APP_STORAGE_URL + poster_path;
                                return (
                                    <li key={id}>
                                        <StyledLink to={`/movie/${id}`}>
                                            <StyledSimilarMoviePoster
                                                src={imageUrl}
                                                alt={original_title}
                                            />
                                        </StyledLink>
                                    </li>
                                );
                            }
                        )}
                    </StyledList>
                )}
            </StyledMovieDetails>
        </StyledContainer>
    );
};

MovieDetailsPage.propTypes = {
    movies: PT.arrayOf(
        PT.shape({
            poster_path: PT.string,
            backdrop_path: PT.string,
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            overview: PT.string.isRequired,
            release_date: PT.string.isRequired
        })
    ).isRequired
};
