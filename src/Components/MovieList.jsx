import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchMovies } from '../Redux/MovieReducer/action';

const MovieList = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, movies } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading movies</div>;

    return (
        <div data-testid="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
