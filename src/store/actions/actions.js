import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

// Series
export const getSeries = series => {
    return {
        type: actionTypes.GET_SERIES,
        payload: series
    }
}

export const fetchSeries = () => {
    return dispatch => {
        axios.get('sample.json')
        .then(response => {
            const moviesAndSeries = [...response.data.entries];
            const series = moviesAndSeries.filter(serie => serie.programType === 'series' && serie.releaseYear >= 2010);
            console.log('Series: ', series)
            dispatch(getSeries(series.slice(0, 21)));
        })
        .catch(error => console.log(error));
    }
}

// Movies
export const getMovies = movies => {
    return {
        type: actionTypes.GET_MOVIES,
        payload: movies
    }
}

export const fetchMovies = () => {
    return dispatch => {
        axios.get('sample.json')
        .then(response => {
            console.log(response.data);
            // dispatch(getMovies(response.data));
        })
        .catch(error => console.log(error));
    }
}