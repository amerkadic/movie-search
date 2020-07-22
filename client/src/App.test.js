import React from 'react';
import { Route } from "react-router-dom"
import { shallow } from 'enzyme';
import App from './App';
import TVShows from "./pages/TVShowsList.component"
import NavBar from "./components/NavBar.component"
import { useDispatch } from 'react-redux';
import { MovieSearch, fetchMovies } from './redux/movie/movieAction'
import { TvshowSearch, fetchTvshow } from './redux/tvshow/tvshowAction'
import { useEffect } from "react";


describe('App', () => {
  it('should have the `Route` "TV Show"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<Route exact path="/" component={TVShows} />)
    ).toBe(true);
  });

});

describe('user populates search field', () => {
  const value = 'avengers';
  const wrapper = shallow(
    <NavBar />
  );
  beforeEach(() => {
    const input = wrapper.find('input').first();
    input.simulate('change', {
      target: { value: value },
    });
  });
  it('should update state property `searchValue`', () => {
    expect(
      wrapper.state().searchValue
    ).toEqual(value);
  });
});
