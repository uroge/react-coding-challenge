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
            console.log(response.data);
            // dispatch(getSeries(response.data));
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