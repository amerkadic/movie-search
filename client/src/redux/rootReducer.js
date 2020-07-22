import { combineReducers } from "redux";
import movieReducer from "./movie/movieReducer";
import tvshowReducer from "./tvshow/tvshowReducer";
import authReducer from "./auth/authReducer";
import collectionReducer from "./collection/collectionReducer";

export default combineReducers({
    movies: movieReducer,
    tvshows: tvshowReducer,
    auth: authReducer,
    collection: collectionReducer
});