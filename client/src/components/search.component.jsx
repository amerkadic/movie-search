import React from "react"
import { useDispatch } from 'react-redux';
import { MovieSearch, fetchMovies } from '../redux/movie/movieAction'
import { TvshowSearch, fetchTvshow } from '../redux/tvshow/tvshowAction'
import { useEffect, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTvshow());
        dispatch(fetchMovies());
        setSearch(localStorage.getItem('mySearchValue'));
        if (localStorage.getItem('mySearchValue').length > 3) {
            dispatch(MovieSearch(localStorage.getItem('mySearchValue')));
            dispatch(TvshowSearch(localStorage.getItem('mySearchValue')));
        }
    }, [dispatch])

    const handleChange = (e) => {
        localStorage.setItem('mySearchValue', e.target.value);
        setSearch(e.target.value);
        if (e.target.value.length < 3) {
            dispatch(fetchTvshow());
            dispatch(fetchMovies());
        }
        else {
            dispatch(MovieSearch(e.target.value));
            dispatch(TvshowSearch(e.target.value));
        }
    }

    return (
        <div className="search-bar">
            <input onChange={handleChange} value={search} placeholder="Search..." />
        </div>
    )
}

export default Search