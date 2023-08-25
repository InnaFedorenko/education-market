
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./style.css";
import logoImage from '/public/images/logos/logoUniVersIty.svg';

import Auth from '../../utils/auth';


const Header = () => {
  // Set the active menu item based on the current page
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // handleActiveMenuItem is a function that sets the active menu item
  const handleActiveMenuItem = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    // Get the active menu item from storage on page load
    const storedActiveItem = localStorage.getItem('activeMenuItem');
    setActiveMenuItem(storedActiveItem || 'about'); // Default to 'about' if none stored
  }, []);

  useEffect(() => {
    // Store the active menu item in local storage whenever it changes
    localStorage.setItem('activeMenuItem', activeMenuItem);
  }, [activeMenuItem]);

  return (
    <Navbar expand="lg" >
      <Container >
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            alt="UniVersIty logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <NavLink
              exact
              className={` ${activeMenuItem === 'home' ? 'active-link' : 'nav-link '}`}
              to="/"
              onClick={() => handleActiveMenuItem('home')}
            >
              Home
            </NavLink>
            <NavLink
              className={` ${activeMenuItem === 'learn' ? 'active-link' : 'nav-link '}`}
              to="/learn"
              onClick={() => handleActiveMenuItem('learn')}
            >
              Learn
            </NavLink>
            <NavLink
              className={`${activeMenuItem === 'teach' ? 'active-link' : 'nav-link '}`}
              to="/teach"
              onClick={() => handleActiveMenuItem('teach')}
            >
              Teach
            </NavLink>
            {Auth.loggedIn() ? (
              <Nav>
                <NavLink
                  className={`${activeMenuItem === 'profile' ? 'active-link' : 'nav-link '}`}
                  to="/profile"
                  onClick={() => handleActiveMenuItem('profile')}
                >
                  Profile
                </NavLink>
                <NavLink
                  className={`${activeMenuItem === 'resume' ? 'active-link' : 'nav-link '}`}
                  to="/resume"
                  onClick={() => handleActiveMenuItem('resume')}
                >
                  Orders
                </NavLink>
              </Nav>
            ) : (false)}
          </Nav>
          <Nav>
            {Auth.loggedIn() ? (
              <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>              
              <NavLink
                className={`${activeMenuItem === 'logout' ? 'active-link' : 'nav-link '}`}
                to="/logout"
                onClick={() => handleActiveMenuItem('logout')}
              >
                Logout
              </NavLink>
              </>
            ) : (
              <Nav >
                <NavLink
                  className={`${activeMenuItem === 'login' ? 'active-link' : 'nav-link '}`}
                  to="/login"
                  onClick={() => handleActiveMenuItem('login')}
                >
                  Login
                </NavLink>
                <NavLink
                  className={`${activeMenuItem === 'signUp' ? 'active-link' : 'nav-link '}`}
                  to="/signUp"
                  onClick={() => handleActiveMenuItem('signUp')}
                >
                  SignUp
                </NavLink>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;