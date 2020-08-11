import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import Search from "../components/search.component";
import { loadUser } from "../redux/auth/authAction";

const TVShowsList = () => {
  const tvshow = useSelector((state) => state.tvshows.tvshows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <Helmet><title>TV Shows</title></Helmet>

      <NavBar />
      <Search />
      <div className="tvshow-list">
        {tvshow.map(tv => (
          <div key={tv.id} className="tvshow-item">
            <Link to={'/tvshow/' + tv.id}>
              <Card
                title={tv.name}
                image={tv.poster_path ?
                  ('https://image.tmdb.org/t/p/w300' + tv.poster_path) :
                  ('https://image.tmdb.org/t/p/w300/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg')}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TVShowsList
