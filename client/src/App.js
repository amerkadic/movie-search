import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import "./App.css"
import { useDispatch } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

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
    <AlertProvider template={AlertTemplate} >
      <BrowserRouter>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/tvshows" />
          </Route>
          <Route path="/tvshows" component={TVShows} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={LoginPage} />
          <Route path="/mycollection" component={Collection} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/tvshow/:id" component={TVShowDetails} />
        </div>
      </BrowserRouter>
    </AlertProvider>
  )
}

export default App
