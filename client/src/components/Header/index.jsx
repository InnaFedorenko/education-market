import { Link } from 'react-router-dom';
import './style.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    <header className="header">
      <div className="logos-logo">
        <div className="logo">
          <div className="overlap-group">
            <div className="ellipse-wrapper">
              <div className="ellipse" />
            </div>
            <div className="frame-2">
              <div className="ellipse-2" />
            </div>
          </div>
          <div className="overlap-2">
            <div className="frame-3">
              <div className="ellipse-3" />
            </div>
            <div className="frame-4">
              <div className="ellipse-4" />
            </div>
          </div>
        </div>
        <p className="uni-vers-ity">
          <span className="span">Uni</span>
          <span className="text-wrapper-2">Vers</span>
          <span className="text-wrapper">Ity</span>
        </p>
      </div>
      <div className="links">
        <Link className="frame" to="/teach">Teach</Link>
        <Link className="frame" to="/learn">Learn</Link>
        {Auth.loggedIn() ? (
          <>
            <Link className="frame" to="/me">Profile</Link>
            {/* <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link> */}
            {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>       */}
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
          <dev links>
          <Link className="frame" to="/login">
              Login
            </Link>
            <Link className="frame" to="/signup">
              Signup
            </Link>
          </dev>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
