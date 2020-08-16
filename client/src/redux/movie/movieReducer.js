import { FETCH_MOVIES, MOVIE_SEARCH, FETCH_LOADING } from "./movieType";

const initialState = {
    movies: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case MOVIE_SEARCH:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}