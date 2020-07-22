import { FETCH_TVSHOW, TVSHOW_SEARCH } from "./tvshowType";

export const fetchTvshow = () => dispatch => {
  fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=c8271eff138deb485c3915b7f70b6963')
    .then(res => res.json())
    .then(data => data.results.slice(0, 10))
    .then(tvshows =>
      dispatch({
        type: FETCH_TVSHOW,
        payload: tvshows
      })
    );
};

export const TvshowSearch = (q) => dispatch => {
  fetch('https://api.themoviedb.org/3/search/tv?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US&page1&query=' + q)
    .then(res => res.json())
    .then(data => data.results)
    .then(tvshows =>
      dispatch({
        type: TVSHOW_SEARCH,
        payload: tvshows
      })
    );
};