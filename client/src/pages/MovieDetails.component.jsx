import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player'
import { Helmet } from "react-helmet";

import Details from "../components/details.component"

const MovieDetails = (props) => {
  const [detail, setDetail] = useState([]);
  const [trailer, setTrailer] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US')
      .then(res => res.json())
      .then(details =>
        setDetail(details)
      );

    fetch(' https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US')
      .then(res => res.json())
      .then(trailer => {
        if (trailer.results[0] !== undefined)
          setTrailer(<ReactPlayer url={'https://www.youtube.com/watch?v=' + trailer.results[0].key} />)
      }
      );
  }, [id]);

  return (
    <div className="movie-details">
      <Helmet><title>Movie details</title></Helmet>
      <Details name={detail.title} type="movie" trailer={trailer} detail={detail} />
    </div>
  )
}

export default MovieDetails;
