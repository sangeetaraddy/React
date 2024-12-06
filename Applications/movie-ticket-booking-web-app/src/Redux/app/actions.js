import {
    GET_MOVIES_FAILURE,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS
} from "./actionTypes"
import axios from "axios";

// GET MOVIES-----------------------------------

const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST
    }
}
const getMoviesSuccess = (payload) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload
    }
}
const getMoviesFailure = (error) => {
    return {
        type: GET_MOVIES_FAILURE,
        error
    }
}

export const getMovies = () => (dispatch) => {
    dispatch(getMoviesRequest);
    return axios.get(`http://localhost:8500/upcomingMovieData`)
        .then(res => {
            dispatch(getMoviesSuccess(res.data))
        })
        .catch(error => {
            dispatch(getMoviesFailure(error))
        });
}







