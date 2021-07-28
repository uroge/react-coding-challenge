import React, { useEffect } from 'react';
import './Movies.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/actions/actions';

import CardContainer from '../../components/CardContainer/CardContainer';

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div className="movies">
            <CardContainer cards={movies}/>
        </div>
    );
}

export default Movies;