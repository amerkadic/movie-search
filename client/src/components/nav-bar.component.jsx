import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav } from "react-bootstrap";
import { logout } from "../redux/auth/authAction";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";


const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const style = ({
    backgroundColor: "#b1cefc",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
  )

  const handleLogout = () => {
    dispatch(logout());
  }

  const guestLinks = (
    <Nav.Item>
      <Link className="login-button" to="/login">Login</Link>
    </Nav.Item>
  );

  const userLinks = (
    <div className="user-buttons">
      <Nav.Item>
        <NavLink className="collection-button" to="/mycollection" activeStyle={style}>My Collection</NavLink>
      </Nav.Item>
      <Nav.Item>
        <Link className="logout-button" to="/" onClick={handleLogout}>Logout</Link>
      </Nav.Item>
    </div >
  );


  return (
    <div className="nav-bar">
      <Navbar expand="md" >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
      MovieDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="mr-auto">
            <Nav.Item >
              <NavLink to="/movies" activeStyle={style} className="nav-buttons">Movies</NavLink>
            </Nav.Item>
            <Nav.Item >
              <NavLink to="/tvshows" activeStyle={style} className="nav-buttons">TV Shows</NavLink>
            </Nav.Item>
          </Nav>
          <Nav fill variant="tabs">
            {auth.isAuthenticated ? userLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  )
}

export default NavigationBar
