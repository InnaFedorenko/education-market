import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { QUERY_USER, QUERY_ORDERS_BY_CLIENT, QUERY_VERSES } from '../../utils/queries';
import { DELETE_ORDER } from '../../utils/mutations';
import './style.css';

const OrdersTable = () => {
    // Query for user data
    const { loading: userLoading, data: userData, refetch: userRefetch } = useQuery(QUERY_USER);
    const profile = userData?.me || {};
    const clientName = profile.name;

    // Query for orders by client
    const { loading: ordersLoading, data: ordersData, refetch: ordersRefetch } = useQuery(QUERY_ORDERS_BY_CLIENT, {
        variables: { clientName },
    });

    const { loading: loading, data: data, refetch: versesRefetch } = useQuery(QUERY_VERSES);

    // Mutation to delete an order
    const [deleteOrder] = useMutation(DELETE_ORDER);

    // Function to handle order cancellation
    const handleCancelOrder = async (orderId) => {
        try {
            await deleteOrder({
                variables: { orderId },
            });
            // After deleting, refetch the orders to update the list
             ordersRefetch();
             userRefetch();
            versesRefetch();
            // refresh the page
            // window.location.reload();
        } catch (error) {
            console.error("Error cancelling order:", error);
        }
    };

    // Validation is no orders
    if (!ordersData?.orderbyClientName.length) {
        return (
            <h3 className="text-center">No Orders Yet</h3>
        );
    }

    return (
        <main >
            <Container>

                {ordersLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Container className="order-table" >
                        <h3>{profile.name}'s Orders</h3>
                        <Row>
                            <Table responsive bordered hover variant="dark" >
                                <thead >
                                    <tr>
                                        <th>#</th>
                                        <th>Client</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Course</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ordersData?.orderbyClientName.map(order => (
                                        <tr key={order._id}>
                                            <td>{order.orderNumber}</td>
                                            <td>{order.clientName}</td>
                                            <td>{order.clientEmail}</td>
                                            <td>{order.createdAtVal}</td>
                                            <td>{order.verseTitle}</td>
                                            <td>$ {order.versePrice}</td>
                                            <td>
                                                <Button className="cancel-button"
                                                    //   variant="danger"
                                                    onClick={() => handleCancelOrder(order._id)}
                                                >
                                                    Cancel
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                        <Row >
                            {ordersData?.orderbyClientName.map(order => (
                                <Col key={order._id} className="mb-4">
                                    <Card className="order-card">
                                        <Card.Body>
                                            <Card.Title className='order-title'>
                                                <Row className="align-items-center">
                                                    <Col>
                                                        <p className="card-text-wrapper">{order.orderNumber}</p>
                                                    </Col>
                                                </Row>
                                            </Card.Title>
                                            <Card.Text >Client: {order.clientName}</Card.Text>
                                            <Card.Text>Email: {order.clientEmail}</Card.Text>
                                            <Card.Text>Date: {order.createdAtVal}</Card.Text>
                                            <Card.Text>Course: {order.verseTitle}</Card.Text>
                                            <Row>
                                                <Col className="card-footer">
                                                    <Row className="align-items-center justify-content-between" >
                                                        <Col xs="auto">
                                                            <Card.Text className="card-text-wrapper" >Cost: ${order.versePrice}</Card.Text>
                                                        </Col>
                                                        <Col xs="auto">
                                                            <Button className="cancel-button-mobile"
                                                                onClick={() => handleCancelOrder(order._id)}
                                                            >
                                                                Cancel
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
                )}
            </Container>
        </main>
    );
};

export default OrdersTable;
