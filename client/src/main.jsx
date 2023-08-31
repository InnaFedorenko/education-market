/**
 * src/main.jsx This file is the entry point for the application.
 */

// Import required dependencies from React and other libraries
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginContext from './utils/LoginContext';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx'
import Home from './pages/Home';
import Learn from './pages/Learn';
import Teach from './pages/Teach';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import SignUp from './pages/SignUp2';
import Login from './pages/Login';
import ViewVerse from './pages/ViewVerse';
import CreateVerse from './pages/CreateVerse';
// import SingleThought from './pages/SingleThought';
import ErrorPage from './pages/ErrorPage';
import Logout from './pages/Logout';
import LearnPage from './pages/LearnPage';


// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/learn',
        element: <LearnPage />
      },
      {
        path: '/teach',
        element: <Teach />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/learn/create',
        element: <CreateVerse />
      },
      {
        path: '/teach/create',
        element: <CreateVerse />
      }
      , {
        path: '/verse/:verseId',
        element: <ViewVerse />
      }
    ]
  },
]);
// Render the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
