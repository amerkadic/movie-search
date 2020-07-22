import React from "react"
import { Link } from "react-router-dom"
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
      <Link className="collection-button" to="/mycollection">My Collection</Link>
    </div>
  );

  return (
    <div className="nav-bar">
      <div className="nav-buttons">
        <Link className="nav-button" to="/movies">Movies</Link>
        <Link className="nav-button" to="/">TV Shows</Link>
      </div>
      {auth.isAuthenticated ? userLinks : guestLinks}
    </div>
  )
}

export default NavBar
