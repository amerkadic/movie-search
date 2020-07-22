import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player";

import Details from "../components/details.component";

const TVShowDetails = (props) => {
  const [detail, setDetail] = useState([]);
  const [trailer, setTrailer] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US')
      .then(res => res.json())
      .then(details =>
        setDetail(details)
      );

    fetch(' https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=c8271eff138deb485c3915b7f70b6963&language=en-US')
      .then(res => res.json())
      .then(trailer => {
        if (trailer.results[0] !== undefined)
          setTrailer(<ReactPlayer url={'https://www.youtube.com/watch?v=' + trailer.results[0].key} />)
      }
      );
  }, [id]);

  const handleBack = () => {
    props.history.goBack();
  }

  return (
    <div className="movie-details">
      <button onClick={handleBack}>&larr; Back</button>
      <Details name={detail.name} trailer={trailer} detail={detail} />
    </div>
  )
}

export default TVShowDetails;
