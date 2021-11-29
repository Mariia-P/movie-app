import React from 'react';
import PT from 'prop-types';

import {
    StyledConteiner,
    StyledGrid,
    StyledNote,
    StyledMovieConteiner,
    StyledLink
} from './styles';

export const HomePage = ({ movies }) => (
    <StyledConteiner>
        {movies.length ? (
            <StyledGrid>
                {movies.map(({ id, original_title, poster_path }) => (
                    <StyledMovieConteiner
                        key={id}
                        $imageUrl={poster_path}
                        // style={{
                        //     backgroundImage: `url(${
                        //          + poster_path
                        //     })`
                        // }}
                    >
                        <StyledLink to={`/movie/${id}`}>
                            {original_title}
                        </StyledLink>
                    </StyledMovieConteiner>
                ))}
            </StyledGrid>
        ) : (
            <StyledNote>There are no movies yet</StyledNote>
        )}
    </StyledConteiner>
);

HomePage.propTypes = {
    movies: PT.arrayOf(
        PT.shape({
            poster_path: PT.string,
            id: PT.number.isRequired,
            original_title: PT.string.isRequired
        })
    ).isRequired
};
