import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./style.css";
import logoImage from '/public/images/logos/logoUniVersIty.svg';

import { useLogin } from '../../utils/LoginContext'; 

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [state, dispatch] = useLogin(); // Get the login state from context

  const handleActiveMenuItem = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeMenuItem');
    setActiveMenuItem(storedActiveItem || 'home');
  }, []);

  useEffect(() => {
    localStorage.setItem('activeMenuItem', activeMenuItem);
  }, [activeMenuItem]);

  return (
    
    <Navbar expand="lg " >
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
            {/* {state.loggedIn && ( // Show "Profile" and "Orders" when logged in */}
              <Nav>
                <NavLink
                  className={`${activeMenuItem === 'profile' ? 'active-link' : 'nav-link '}`}
                  to="/profile"
                  onClick={() => handleActiveMenuItem('profile')}
                >
                  Profile
                </NavLink>
                <NavLink
                  className={`${activeMenuItem === 'orders' ? 'active-link' : 'nav-link '}`}
                  to="/orders"
                  onClick={() => handleActiveMenuItem('orders')}
                >
                  Orders
                </NavLink>
              </Nav>
            {/* )} */}
          </Nav>
          <Nav>
            {state.loggedIn ? ( // Show "Logout" when logged in
              <>
                <NavLink
                  className={`${activeMenuItem === 'logout' ? 'active-link' : 'nav-link '}`}
                  to="/logout"
                  onClick={() => handleActiveMenuItem('logout')}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <Nav>
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
