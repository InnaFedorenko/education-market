import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import './style.css';
import learnImagePath from "/images/verse/verse_example.png";
import teachImagePath from "/images/verse/teach.png";
import avatarPath from "/images/verse/Avatar_def.jpg";
import { NavLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_VERSES, QUERY_USER, QUERY_ORDERS_BY_CLIENT } from '../../utils/queries';
import { ADD_ORDER } from '../../utils/mutations';
import { useLogin } from '../../utils/LoginContext';
import { useContext } from 'react';

const VerseList = ({ title, type }) => {
  const { loading: userLoading, data: userData, refetch: userRefetch } = useQuery(QUERY_USER);
  const profile = userData?.me || {};
  const { loading: loading, data: data, refetch: versesRefetch } = useQuery(QUERY_VERSES);
  let verses = data?.verses || [];
  // console.log({ verses });
  const { loading: ordersLoading, data: ordersData, refetch: ordersRefetch } = useQuery(QUERY_ORDERS_BY_CLIENT, {
    variables: { clientName: profile.name },
  });

  console.log({ profile });
  // Validation is no orders
  if (!verses.length) {
    return <h3>No Courses Yet</h3>;
  }
  //TODO - LoginCheck and LoginCheck Helper - replace next page
  const [state, dispatch] = useLogin(); // Get the login state from context

  verses = verses.filter(verse => verse.verseType.toString() == type);
  console.log(userLoading, loading, ordersLoading);
  // Mutation to add a new order

  const [addOrder, { error }] = useMutation(ADD_ORDER);

  const handlePlaceOrder = async (verseId) => {
    try {
      const { data } = await addOrder({
        variables: {
          verseTitle: verses.find((verse) => verse._id === verseId).title,
          clientName: profile.name, 
          clientEmail: profile.email, 
          versePrice: verses.find((verse) => verse._id === verseId).price,
        },
      });
      // After deleting, refetch the orders to update the list
      versesRefetch();
      userRefetch();
      ordersRefetch();
      // refresh the page
      // window.location.reload();


    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  
  const imagePath = type == "true" ? teachImagePath : learnImagePath;
  return (
        <Container className='card-container nav_border'>
          <h3 className="text-left title">{title}</h3>
          <Row xs={1} sm={1} md={2} lg={3} >
            {verses.map((verse) => (
              <Col key={verse._id} className="mb-4">
                <Card className="card">
                  <Card.Img id="projImg" variant="top" src={imagePath} />
                  <Card.Body>
                    <Card.Title className='verse-title'>
                      <Row className="align-items-center">
                        <Col xs="auto">
                          <img src={verse.authorProfile.avatarLink ? verse.authorProfile.avatarLink : avatarPath} className="avatar" />
                        </Col>
                        <Col>
                          <p className="card-text-wrapper">{verse.authorProfile.name}</p>
                          <p className="creation-date">{verse.createdAtVal}</p>
                        </Col>
                      </Row>
                    </Card.Title>

                    <Card.Text className='verse-title'>{verse.title}</Card.Text>
                    <Card.Text>{verse.description}</Card.Text>
                    <Row>
                      <Col className="card-footer">
                        <Row className="align-items-center justify-content-between" >
                          <Col xs="auto">
                            <Card.Text className="card-text-wrapper" >Cost: ${verse.price}</Card.Text>
                            <Card.Text className="card-text-wrapper">
                              <span className="span">Ordered: </span>
                              <span className="text-wrapper-4">{verse.orderCount} </span>
                              <span className="text-wrapper-5">times</span>
                            </Card.Text>

                          </Col>
                          <Col xs="auto" className="ordered-times-col">

                          </Col>
                          <Col xs="auto">
                            <NavLink to={`/verse/${verse._id}`} className="view-button">
                              View
                            </NavLink>
                            {state.loggedIn && ( // Show "Profile" and "Orders" when logged in
                              <Button
                                variant="primary"
                                className="order-button"
                                onClick={() => handlePlaceOrder(verse._id)} // Call the handlePlaceOrder function on click
                              >
                                Order
                              </Button>
                            )}
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
