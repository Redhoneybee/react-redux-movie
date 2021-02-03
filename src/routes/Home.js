import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { addMovie } from '../store';
import { connect } from 'react-redux';

import '../global.css';
import '../main.css'

import Movies from '../Components/Movies';

function Home({ loadMovies }) {
    const [isloading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json/sort_by=rating');
        // console.log(movies);
        setMovie(movies);
        loadMovies(movies);
        setIsLoading(true);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            {isloading ? (
                <ul className="movies">
                    {movie.length > 0 &&
                        movie.map((data, index) => <Movies key={index} movie={data} />)
                    }
                </ul>
            ) : (
                    <div className="loading flex">
                        <span className="loading_text">Loading...</span>
                    </div>
                )}
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        loadMovies: (movies) => dispatch(addMovie(movies))
    }
}

export default connect(null, mapDispatchToProps)(Home);