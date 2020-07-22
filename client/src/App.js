import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import { useDispatch } from 'react-redux';

import TVShows from "./pages/TVShowsList.component"
import Movies from "./pages/MoviesList.component"
import MovieDetails from "./pages/MovieDetails.component";
import TVShowDetails from "./pages/TVShowDetails.component";
import LoginPage from "./pages/LoginPage.component"
import { loadUser } from "./redux/auth/authAction";
import Collection from "./pages/Collection.component";


function App() {
  localStorage.setItem('mySearchValue', "");
  const dispatch = useDispatch();
  dispatch(loadUser());
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={TVShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={LoginPage} />
        <Route path="/mycollection" component={Collection} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/api/collection/:id" component={TVShowDetails} />
      </div>
    </BrowserRouter>
  )
}

export default App
