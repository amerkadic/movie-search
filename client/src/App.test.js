import * as React from 'react';
import * as Redux from 'react-redux'
import { Route } from "react-router-dom"
import { shallow } from 'enzyme';

import App from './App';
import TVShows from "./pages/TVShowsList.component"
import Search from './components/search.component';
import LoginPage from './pages/LoginPage.component';
import SignIn from './components/sign-in.component';
import MoviesList from './pages/MoviesList.component';



const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));


describe('App', () => {
  it('should have the `Route` "TV Show"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<Route path="/tvshows" component={TVShows} />)
    ).toBe(true);
  });

});


describe('user populates search field', () => {
  const value = 'avengers';
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  const wrapper = shallow(
    <Search />
  );
  beforeEach(() => {
    const input = wrapper.find('input').first();
    input.simulate('change', {
      target: { value: value },
    });
  });

  it('should update state property `search`', () => {
    expect(setState).toHaveBeenCalledWith(value);
  });
});


describe('Login page', () => {
  const wrapper = shallow(
    <LoginPage />
  );

  it('should have a `sign in` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <SignIn />
      )
    ).toBe(true);
  });
});
