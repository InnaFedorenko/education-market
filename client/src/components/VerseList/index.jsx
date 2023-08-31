import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import './style.css';
import learnImagePath from "/images/verse/verse_example.png";
import teachImagePath from "/images/verse/teach.png";
import avatarPath from "/images/verse/Avatar_def.jpg";
import { NavLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';
import { useLogin } from '../../utils/LoginContext';
import { QUERY_VERSES, QUERY_ORDERS_BY_CLIENT } from '../../utils/queries';
// import {useOutletContext} from 'react-router-dom';

const VerseList = ({ verses, title, type,seed, setSeed }) => {
  // const [setSeed, seed] = useOutletContext();
  if (!verses.length) {
    return <h3>No Courses Yet</h3>;
  }
  //TODO - LoginCheck and LoginCheck Helper - replace next page
  const [state, dispatch] = useLogin(); // Get the login state from context

  verses = verses.filter(verse => verse.verseType.toString() == type);
  // console.log(verses);
  // Mutation to add a new order
  const [addOrder, {error}] = useMutation(ADD_ORDER, {refetchQueries: [{query: QUERY_VERSES}, {query:QUERY_ORDERS_BY_CLIENT}]}); // Add the refetchQueries option to the mutation
  // const [addOrder, { error }] = useMutation(ADD_ORDER,
  //   {refetchQueries: [{query: QUERY_VERSES}, {query:QUERY_ORDERS_BY_CLIENT}]}




      // update(cache, { data: { addOrder } }) {
      //   try {
      //     // find the related query that you want to update, 
      //     // for adding a game (MUTATION_ADD_GAME)
      //     // I would want to update the query that gets all games (QUERY_GAMES)
      //     // this will read data from the games cache and save it a variable called games (the variable name - games - should also match what you have in the QUERY_GAMES)
      //     const { verses } = cache.readQuery({ query: QUERY_VERSES });
      //     const versesCopy = [...verses].map(verse => {
      //       if (verse.title === addOrder.verseTitle) {
      //         verse.orderCount = verse.orderCount + 1;
      //       }
      //       return verse;
      //     })
      //     // update the old query by inserting the new data
      //     cache.writeQuery({
      //       query: QUERY_VERSES,
      //       // i know how I want this sorted, I want all new data at the beginning, (addGame)
      //       // copy all old data to the end of the array (...games)
      //       // ... is called the spread operator (copy-and-paste operator)
      //       data: { verses: versesCopy },
      //       broadcast: true
      //     });
  
      //   } catch (e) {
      //     console.error(e);
      //   }
      //},
   // }
   //);
  const handlePlaceOrder = async (verseId) => {
    try {
      const { data } = await addOrder({
        variables: {
          verseTitle: verses.find((verse) => verse._id === verseId).title,
          clientName: verses.find((verse) => verse._id === verseId).authorProfile.name,
          clientEmail: verses.find((verse) => verse._id === verseId).authorProfile.email,
          versePrice: verses.find((verse) => verse._id === verseId).price,
        },
      });
      console.log(data);
      // refresh the page
     // window.location.reload();
      //setSeed(seed+1);

    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const imagePath = type == "true" ? teachImagePath : learnImagePath;
  return (
    <Container className='card-container nav_border'>
      <Row className="justify-content-between">
        <Col xs="auto">
          <h3 className="text-left title">{title}</h3>
        </Col>
        {state.loggedIn && ( // Show "Profile" and "Orders" when logged in
          <Col xs="auto">
            <NavLink to={`\create`} className="create-button">Add New</NavLink>

          </Col>
        )}
      </Row>
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
