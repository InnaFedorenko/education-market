import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileLogo from './ProfileLogo';
import ProfileTotals from './ProfileTotals';
import ProfileAbout from './ProfileAbout';
// import ProfileAbout from './ProfileAbout';

// import app component styles
import './style.css';

const ProfileMain = ({ profile, title }) => {
  console.log(profile.totalTeaching);
  return (
    <main>
      <aside>
        <Container>
          <Row>
            {/* ProfileLogo and ProfileTotals in one column with 30% width */}
            <Col xs={12} md={4}>
              <h3 className="text-left title">{title}</h3>
              <ProfileLogo initialProfile={profile} />
              <ProfileTotals 
              totalt={profile.totalTeaching}
              totall={profile.totalLearning}
              totalo={profile.totalOrders}
              />
            </Col>

            {/* About, Skills, and Targets in another column with 70% width */}
            <Col xs={12} md={8}>
              {/* About */}
              <Row>
                {/* <Col>
                  <h3 className="text-left title">About</h3>
                  <ProfileAbout initialProfile={profile} />
                </Col> */}
              </Row>
              <Row>
                <Col>
                  {/* Content for About */}
                </Col>
              </Row>

              {/* Skills */}
              <Row>
                <Col>
                  <h3 className="text-left title">Skills</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* Content for Skills */}
                </Col>
              </Row>

              {/* Targets */}
              <Row>
                <Col>
                  <h3 className="text-left title">Targets</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* Content for Targets */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </aside>
    </main>
  );
};

export default ProfileMain;
