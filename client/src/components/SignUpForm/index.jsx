import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import { useLogin } from '../../utils/LoginContext';

import Auth from '../../utils/auth';

const SignUpForm = (props) => {
  const [state, dispatch] = useLogin(); // Get the login state from context
    //console.log ({state});

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const [validated] = useState(false);

  const handleChange = (event) => {
  const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   // console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      // console.log(data?.signUp.token)  
      // console.log(data?.signUp.profile);
      Auth.setToken(data.signUp.token);

      dispatch({
        type: 'LOGIN',
        payload: {
          token: data?.signUp.token,
          user: data?.signUp.profile
        }
      });

      // To navigate to the '/learn' route
      navigate('/learn');

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="main">
      <Container className="login-container">
        <h4 className="login-title">Sign Up</h4>
        <div className="card-body">
          {/* {data ? ( */}
          {/* <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p> */}
          {/* ) : ( */}
          <form onSubmit={handleFormSubmit} noValidate validated={validated}>
            <input
              className="form-input"
              placeholder="Your username"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="email@dot.com"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="login-button"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
            <div className="sign">
              <p className="sign-option">
                <span className="text-wrapper-sing">If you already have an account, please</span>
                <span className="text-wrapper-sing">&nbsp;</span>
                <Link to="/login" className="link-sign">Login</Link>
              </p>
            </div>
          </form>
          {/* )} */}

          {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
        </div>

      </Container>
    </main>
  );
};

export default SignUpForm;
