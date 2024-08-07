import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:max-w-xs">
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-48 object-cover"
                />
            </Link>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{movie.Title}</h3>
                <p className="text-gray-700 text-sm mt-1">{movie.Year}</p>
                <p className="text-gray-600 text-sm">{movie.Type}</p>
                <p className="text-gray-500 text-sm mt-2">{movie.rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;
