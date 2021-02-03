import React, { useEffect } from 'react';

function Movies({ movie }) {
    console.log(movie);
    return (
        <li>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <h4>{movie.year}</h4>
            <ul>
                {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <h4>{movie.summary}</h4>
        </li>
    )
}

export default Movies;