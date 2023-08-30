import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ORDERS_BY_CLIENT } from '../utils/queries';
import OrdersTable from "../components/OrdersTable";

const Orders = () => {
  // Query for user data
  const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
  const profile = userData?.me || {};
  const clientName = profile.name;

  // Query for orders by client
  const { loading: ordersLoading, data: ordersData } = useQuery(QUERY_ORDERS_BY_CLIENT, {
    variables: { clientName },
  });

  return (
    <main>
      <div>
        {/* <h1>Welcome to Orders Page - coming soon...!</h1> */}
        {userLoading || ordersLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <OrdersTable/>
            {/* Render your orders data here */}
            <h3> {profile.name}'s orders - Main page</h3>
            {/* {ordersData?.orderbyClientName.map(order => (
              <div key={order._id}>
                <p>Order Number: {order.orderNumber}</p>
                <p>Client Name: {order.clientName}</p>
                <p>Client Email: {order.clientEmail}</p>
                <p>Order Date: {order.createdAtVal}</p>
                <p>Order Status: {order.verseTitle}</p>
                <p>Order Total: {order.verseText}</p> 
                <button>Cancel Order</button>
                <br></br>
                <span>"------------------------------------------"</span>
              </div>
            ))} */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;
