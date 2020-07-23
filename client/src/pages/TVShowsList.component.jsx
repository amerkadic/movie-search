import React from "react"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import Search from "../components/search.component";
import { Helmet } from "react-helmet";

const TVShowsList = () => {
  const tvshow = useSelector((state) => state.tvshows.tvshows);

  return (
    <div>
      <Helmet><title>TV Shows</title></Helmet>

      <NavBar />
      <Search />
      <div className="tvshow-list">
        {tvshow.map(tv => (
          <div key={tv.id} className="tvshow-item">
            <Link to={'/api/tvshow/' + tv.id}>
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
