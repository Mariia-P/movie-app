import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_MOVIEDB_API_KEY, REACT_APP_MOVIEDB_URL } = process.env;

const SET_MOVIE_DETAILS_AND_SIMILAR_MOVIES =
    'SET_MOVIE_DETAILS_AND_SIMILAR_MOVIES';
const SET_SIMILAR_MOVIES = 'SET_SIMILAR_MOVIES';  

const initialState = {
    movie: null,
    similarMovies: []
};
const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MOVIE_DETAILS_AND_SIMILAR_MOVIES:
            return {
                ...state,
                movie: payload.movie,
                similarMovies: payload.similarMovies
            };

            case SET_SIMILAR_MOVIES:
                return {
                    ...state,
                    similarMovies: payload.similarMovies
                }

        default:
            return state;
    }
};

export const useMovieDetailsAndSimilarMovies = movies => {
    const { movieId } = useParams();
const existingMovie = movies.find(({ id }) => id === +movieId);

    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        movie: existingMovie || null
    });

    useEffect(() => {
        const similarMoviesUrl = `${REACT_APP_MOVIEDB_URL}/movie/${movieId}/similar?api_key=${REACT_APP_MOVIEDB_API_KEY}`;
        if (existingMovie) {
            (async () =>{
               const {data}= await axios.get(similarMoviesUrl);

               dispatch({
                   type: SET_MOVIE_DETAILS_AND_SIMILAR_MOVIES,
                   payload: {
                       movie: existingMovie,
                       similarMovies: data.results.slice(0, 5)
                   }
               });
            })();
            return;
        }
        
        const movieDetailsUrl = `${REACT_APP_MOVIEDB_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIEDB_API_KEY}`;

        (async () => {
            try {
                const [
                    movieDetailsResponse,
                    similarMoviesResponse
                ] = await Promise.all([
                    axios.get(movieDetailsUrl),
                    axios.get(similarMoviesUrl)
                ]);

                // console.log('[movieDetailsResponse]', movieDetailsResponse);
                // console.log('[similarMoviesResponse]', similarMoviesResponse);
                const movie = movieDetailsResponse.data;
                const { results } = similarMoviesResponse.data;
                const similarMovies = results.slice(0, 5);
                dispatch({
                    type: SET_MOVIE_DETAILS_AND_SIMILAR_MOVIES,
                    payload: {
                        movie,
                        similarMovies
                    }
                });
            } catch (e) {
                console.log('[e]', e);
            }
        })();
    }, [movieId]);
    // console.log('[state]', state);
    return state;
};
