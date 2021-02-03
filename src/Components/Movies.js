import React from 'react';
import { Link } from 'react-router-dom';

function Movies({ movie }) {
    console.log(movie);
    return (
        <li className="movie">
            <Link to={`/${movie.id}`}>
                <img className="movie_image" src={movie.medium_cover_image} alt={movie.title}></img>
                <div className="movie_contents">
                    <div className="movie_top">
                        <h3 className="movie_title">{movie.title}</h3>
                        <h4 className="movie_year">{movie.year}</h4>
                    </div>
                    <ul className="movie_genres">
                        {movie.genres.map((genre, index) => <li className="genre" key={index}>{genre}</li>)}
                    </ul>
                    <h4 className="movie_summary">{movie.summary.slice(0, 240)}...</h4>
                </div>
            </Link>
        </li>
    )
}

export default Movies;