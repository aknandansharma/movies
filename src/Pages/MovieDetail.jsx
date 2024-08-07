import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading movie details</div>;

    return (
        <div>
            {movie && (
                <div>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Plot}</p>
                    <p>Year: {movie.Year}</p>
                    <p>Rating: {movie.rating}</p>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
