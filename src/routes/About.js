import React from 'react';
import { connect } from 'react-redux';
import DetailMovie from '../Components/DetailMovie';
import '../about.css';

function About({ movie }) {
    return (
        <div className="movie_detail flex">
            {movie !== undefined &&
                <DetailMovie movie={movie} />
            }
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    const { match: { params: { id } } } = ownProps;
    return {
        movie: state.find(movie => movie.id === parseInt(id))
    }
}
export default connect(mapStateToProps)(About);