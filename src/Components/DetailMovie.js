import React from 'react';


function DetailMovie({ movie }) {
    function handleMouseEnter(e) {
        const detail = e.target.parentNode;

        detail.classList.add('visible');
    }
    function handleMouseLeave(e) {
        const detail = e.target.parentNode;

        detail.classList.remove('visible');
    }
    return (
        <>
            <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={movie.large_cover_image} alt={movie.title}></img>

            <div className="info_wrap flex">
                <div className="info">
                    <div className="top">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="year">{movie.year}</h4>
                    </div>
                    <h3 className="genres_title">GENRE</h3>
                    <ul className="genres">
                        {movie.genres.map((genre, index) => <li className="genre" key={index}>{genre}</li>)}
                    </ul>
                    <h4 className="summary">
                        {movie.summary}
                    </h4>
                </div>
            </div>
        </>
    );
}

export default DetailMovie;