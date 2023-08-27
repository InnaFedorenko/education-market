import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import './style.css';
import learnImagePath from "/public/images/verse/verse_example.png";
import teachImagePath from "/public/images/verse/teach.png";
import avatarPath from "/public/images/verse/avatar.png";

const VerseList = ({ verses, title, type }) => {
  if (!verses.length) {
    return <h3>No Courses Yet</h3>;
  }
 verses = verses.filter(verse => verse.verseType.toString() == type);
 const imagePath = type == "true" ? teachImagePath  : learnImagePath;
  return (
    <Container className='card-container nav_border'>
      <h3 className="text-left title">{title}</h3>
      <Row ClassName='card' xs={1} sm={1} md={2} lg={3} >
        {verses.map((verse) => (
          <Col key={verse._id} className="mb-4">
            <Card className="card">
              <Card.Img id="projImg" variant="top" src={imagePath} />
              <Card.Body>
                <Card.Title className='verse-title'>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <img src={avatarPath} className="avatar" />
                    </Col>
                    <Col>
                      <p className="card-text-wrapper">{verse.author}</p>
                      <p className="creation-date">{verse.createdAtVal}</p>
                    </Col>
                  </Row>
                </Card.Title>

                <Card.Text className='verse-title'>{verse.title}</Card.Text>
                <Card.Text>{verse.description}</Card.Text>
                {/* <Card.Text className="card-text-wrapper" >Cost: ${verse.price}</Card.Text> */}
                {/* <Card.Text>Verse Type = {verse.verseType.toString()}</Card.Text> */}
                <Row>
                  <Col className="card-footer">
                    <Row className="align-items-center justify-content-between" >
                      <Col xs="auto">
                      <Card.Text className="card-text-wrapper" >Cost: ${verse.price}</Card.Text>
                        {/* <Button variant="primary" className="view-button">
                          View
                        </Button> */}
                      </Col>
                      <Col xs="auto" className="ordered-times-col">
                        <p className="ordered-times">
                          <span className="span">Ordered: </span>
                          <span className="text-wrapper-4">0 </span>
                          <span className="text-wrapper-5">times</span>
                        </p>
                      </Col>
                      <Col xs="auto">
                        <Button variant="primary" className="order-button">
                          Order
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VerseList;
