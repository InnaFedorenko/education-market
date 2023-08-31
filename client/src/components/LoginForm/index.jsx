import { useState } from "react";
import { MUTATION_LOGIN } from '../../utils/mutations';
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { Container } from "react-bootstrap";
import { useLogin } from '../../utils/LoginContext';
import auth from "../../utils/auth";

// const history = useHistory();



export default function LoginForm(props) {
  const [state, dispatch] = useLogin(); // Get the login state from context

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: ''
  });

  const [login, { error }] = useMutation(MUTATION_LOGIN);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setFormState({
      ...formState, // copy the old form state
      [name]: value // update the new value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    // setShowError(false);
    // setShowSuccess(false);

    try {
      const { data } = await login({
        variables: {
          ...formState
        }
      });
      // console.log({data});
      // console.log(data?.login.token)
      // console.log(data?.login.profile);
      //setShowSuccess(true);
      setUserData(data?.login.profile);
      // console.log(data?.login.token);
      // localStorage.setItem('user_token', data?.login.token);
     //localStorage.setItem('user_profile', data?.login.profile);
      auth.setToken(data?.login.token);
      // Save the token to localStorage
      dispatch({
        type: 'LOGIN',
        payload: {
          token: data?.login.token,
          user: data?.login.profile
        }
      });

      // To navigate to the '/learn' route
      navigate('/learn');

    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  }

  return (
    <main className="main">
      <Container className="login-container">
        <h4 className="login-title">Login</h4>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="email@dot.com"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button type="submit" className="login-button">Login</button>
            <div className="sign">
              <p className="sign-option">
                <span className="text-wrapper-sing">If you don&#39;t have an account yet, please</span>
                <span className="text-wrapper-sing">&nbsp;</span>
                <Link to="/signUp" className="link-sign">Sign Up</Link>
              </p>
            </div>

            <div className="card-body">
              {showError ? (
                <h4 style={{ color: "red" }}>
                  Wrong password!
                </h4>
              ) : (
                <></>
              )}
              {showSuccess ? (
                <h4 style={{ color: "green" }}>
                  Good Login! Hello, {userData.name}!
                  <p>
                    Success! You may now head{' '}
                    <Link to="/learn">Start Exploring.</Link>
                  </p>
                </h4>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </Container>
    </main>
  )
}