import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileAside from "./ProfileAside";

// import app component styles
import './style.css';

const profileMain = ({profile, title}) => {

    console.log(profile);
  return (
    <main>
      <Container >
         <Row>
              <Col>
              <h3 className="text-left title">{title}</h3>
                <ProfileAside
                    username= {profile.name}
                    email = {profile.email}
                    profilePicture= {profile.avatarLink}
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
