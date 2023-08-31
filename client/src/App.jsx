/* /**
 * src/App.jsx  The main App component for the application
 */
import { useState } from 'react'
// import app component styles
import './App.css';

// import apollo client dependencies
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

// import react-router-dom dependencies
import { Outlet } from 'react-router-dom';

// import hight level components
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

import LoginProvider from './utils/LoginContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [seed,setSeed] = useState(0)

  // get token, if null, empty string will be the token
  const token = Auth.getToken() || '';
  // want to set the proper state from the beginning if we are initially logged in
  const loggedIn = token.length > 0;
  // declared apollo provider here, so we cannot run queries in this App component
  // We create a LoginCheck component to do that work for us.
  return (
    <ApolloProvider client={client}>
     <LoginProvider token={token} loggedIn={loggedIn}>
        <Container fluid className="container-flex">
          <Header />
          <main className="main-content">
            <Outlet/>
    
          </main>
          <Footer />
        </Container>
      </LoginProvider>
    </ApolloProvider>
  );
}

export default App;
