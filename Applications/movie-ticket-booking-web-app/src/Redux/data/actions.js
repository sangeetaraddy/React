import * as actionType from "./actionTypes";
import axios from "axios";
const getMovieRequest = () => {
  return {
    type: actionType.GET_MOVIE_REQUEST,
  };
};

const getMovieSuccess = (payload) => {
  return {
    type: actionType.GET_MOVIE_SUCCESS,
    payload,
  };
};

const getMovieFailure = (error) => {
  return {
    type: actionType.GET_MOVIE_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const getMovies = (id) => (dispatch) => {
  dispatch(getMovieRequest());
  debugger;
  return axios
    .get(`http://localhost:8500/upcomingMovieData/${id}`)
    .then((res) => {
      debugger;
      dispatch(getMovieSuccess(res.data));
    })
    .catch((err) => dispatch(getMovieFailure(err)));
};

export const putMovies = (id, param) => (dispatch) => {
  return axios
    .patch(`http://localhost:8500/upcomingMovieData/${id}`, param)
    .then((res) => {
      dispatch(getMovies(id));
    })
    .catch((err) => dispatch(getMovieFailure(err)));
};