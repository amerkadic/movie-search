import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import Search from "../components/search.component";
import { loadUser } from "../redux/auth/authAction";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <div>
      <Helmet>
        <title>Movies</title>
      </Helmet>

      <NavBar />
      <Search />
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
    </div>
  )
}

export default MoviesList;
