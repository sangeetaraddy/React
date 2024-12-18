import * as actionType from "./actionTypes";

const initState = {
  movieDetails: {},
  isError: false,
  isLoading: false,
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        isLoading: false,
      };
    case actionType.GET_MOVIE_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
