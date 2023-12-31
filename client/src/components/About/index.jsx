import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'; // Import the CSS file
import imagePath from "/images/homeBackground/About.png"
import { useLogin } from '../../utils/LoginContext'

export default function AboutMe() {
    const [state, dispatch] = useLogin(); // Get the login state from context
    return (
        <section >
            <Container className='nav_border'>
                <Row className="align-items-center">
                    <Col md={6} className="p-6 text-center">
                        <p className="empower-educators">
                            <span className="text-wrapper">Empower </span>
                            <span className="span">
                             <a href="/teach" className="empower-link orange">Educators</a>
                            </span>
                            <span className="text-wrapper">, Enable </span>
                            <span className="text-wrapper-2">
                             <a href="/learn" className="empower-link blue">Learners</a>
                            </span>
                        </p>
                        <p className="our-university">
                            <span className="text-wrapper">Our </span>
                            <span className="span">Uni</span>
                            <span className="text-wrapper-2">Vers</span>
                            <span className="text-wrapper">Ity</span>
                            <span className="text-wrapper">
                                {" "}
                                platform connects passionate educators directly with curious learners.
                            </span>
                        </p>
                        {!state.loggedIn && (
                        <p className="join-button">
                            <a href="/signUp" className="title">
                                Join Us
                            </a>
                        </p>
                        )}
                    </Col>
                    <Col>
                        <img
                            src={imagePath}
                            className="scaled-image"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
