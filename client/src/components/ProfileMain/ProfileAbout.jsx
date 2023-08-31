import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// import app component styles
import './style.css';

const ProfileAbout = ({aboutProfile}) => {
console.log({aboutProfile});

  return (
    <main>
        <h4>About text</h4>
        <p>{aboutProfile.about}</p>
    </main>
  );
};

export default ProfileAbout;
