import * as actionTypes from '../actions/actionTypes';

const initialState = {
    series: [],
    movies: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SERIES:
            return {
                ...state,
                series: [...action.payload]
            }
        case actionTypes.GET_MOVIES:
            return {
                ...state,
                movies: [...action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;