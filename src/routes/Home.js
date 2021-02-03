import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { addMovie } from '../store';
import { connect } from 'react-redux';

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
        <div className="container">
            {isloading ? (
                <ul>
                    {movie.length > 0 &&
                        movie.map((data, index) => <Movies key={index} movie={data} />)
                    }
                </ul>
            ) : (
                    <div>
                        <span>Loading...</span>
                    </div>
                )}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        loadMovies: (movies) => dispatch(addMovie(movies))
    }
}

export default connect(null, mapDispatchToProps)(Home);