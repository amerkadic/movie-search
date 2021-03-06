import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Spinner } from "react-bootstrap";

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import Search from "../components/search.component";
import { loadUser } from "../redux/auth/authAction";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const MovieItems = (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={'/movie/' + movie.id}>
            <Card
              title={movie.title}
              image={movie.poster_path ?
                ('https://image.tmdb.org/t/p/w300' + movie.poster_path) :
                ('https://image.tmdb.org/t/p/w300/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg')}
            />
          </Link></div>
      ))}
    </div>
  );

  const LoadingSpinner = (
    <div className="loading-spinner">
      <Spinner animation="border" variant="info" />
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <NavBar />
      <Search />
      {isLoading ? LoadingSpinner : MovieItems}
    </div>
  )
}

export default MoviesList;
