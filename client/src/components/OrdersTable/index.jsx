import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { Table, Button } from 'react-bootstrap';
import { QUERY_USER, QUERY_ORDERS_BY_CLIENT } from '../../utils/queries';
import { DELETE_ORDER } from '../../utils/mutations';

const OrdersTable = () => {
  // Query for user data
  const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
  const profile = userData?.me || {};
  const clientName = profile.name;

  // Query for orders by client
  const { loading: ordersLoading, data: ordersData, refetch } = useQuery(QUERY_ORDERS_BY_CLIENT, {
    variables: { clientName },
  });

  // Mutation to delete an order
  const [deleteOrder] = useMutation(DELETE_ORDER);

  // Function to handle order cancellation
  const handleCancelOrder = async (orderId) => {
    try {
      await deleteOrder({
        variables: { orderId },
      });
      // After deleting, refetch the orders to update the list
      refetch();
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  return (
    <main >
      <div>
        <h3>{profile.name}'s Orders</h3>
        {ordersLoading ? (
          <p>Loading...</p>
        ) : (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Client Email</th>
                <th>Order Date</th>
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
                  <td>{order.versePrice}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </main>
  );
};

export default OrdersTable;
