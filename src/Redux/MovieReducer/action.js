import axios from 'axios';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';

export const fetchMovies = () => (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    axios.get(`http://localhost:3000/movies`)
        .then(response => {
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_MOVIES_FAILURE });
        });
};
