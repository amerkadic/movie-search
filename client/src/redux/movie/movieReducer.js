 import { FETCH_MOVIES, MOVIE_SEARCH } from "./movieType";

const initialState = {
     movies : []  
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case MOVIE_SEARCH:
            return{
                ...state,
                movies: action.payload
            }   
        default:
            return state; 
    }
}