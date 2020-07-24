import React from "react"
import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../redux/auth/authAction";

const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  const guestLinks = (
    <Link className="login-button" to="/login">Login</Link>
  );

  const userLinks = (
    <div>
      <Link className="logout-button" to="/" onClick={handleLogout}>Logout</Link>
      <NavLink className="collection-button" activeStyle={{ fontSize: 35, fontWeight: "bold", color: 'red' }} to="/mycollection">My Collection</NavLink>
    </div >
  );

  return (
    <div className="nav-bar">
      <div className="nav-buttons">
        <NavLink className="nav-button" activeStyle={{ fontSize: 35, fontWeight: "bold", color: 'red' }} to="/movies">Movies</NavLink>
        <NavLink className="nav-button" activeStyle={{ fontSize: 35, fontWeight: "bold", color: 'red' }} to="/tvshows">TV Shows</NavLink>
      </div>
      {auth.isAuthenticated ? userLinks : guestLinks}
    </div>
  )
}

export default NavBar
