import { FETCH_MOVIES, MOVIE_SEARCH } from "./movieType";

export const fetchMovies = () => dispatch => {
  fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=c8271eff138deb485c3915b7f70b6963')
    .then(res => res.json())
    .then(data => data.results.slice(0, 10))
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    );
};


export const MovieSearch = (q) => dispatch => {
  fetch('https://api.themoviedb.org/3/search/movie?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US&page1&query=' + q)
    .then(res => res.json())
    .then(data => data.results)
    .then(movies =>
      dispatch({
        type: MOVIE_SEARCH,
        payload: movies
      })
    );
};


