import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileAside from "./ProfileAside";


// import app component styles
import './style.css';

const profileMain = ({profile, title}) => {

   console.log({profile});
  return (
    <main>
      <Container >
         <Row>
              <Col>
              <h3 className="text-left title">{title}</h3>
                <ProfileAside
              initialProfile={profile}
                />
                </Col>
                {/* <Col>
                <profileMain />
                </Col> */}
            </Row>
      </Container>
    </main>
  );
};

export default profileMain;
