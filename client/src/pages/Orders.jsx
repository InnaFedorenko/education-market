import React from "react";
import { useQuery } from '@apollo/client';
// import { QUERY_USER, QUERY_ORDERS_BY_CLIENT } from '../utils/queries';
import OrdersTable from "../components/OrdersTable";

const Orders = () => {
  // // Query for user data
  // const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
  // const profile = userData?.me || {};
  // const clientName = profile.name;

  // // Query for orders by client
  // const { loading: ordersLoading, data: ordersData } = useQuery(QUERY_ORDERS_BY_CLIENT, {
  //   variables: { clientName },
  // });

  return (
    <main>
      <div>
        {/* <h1>Welcome to Orders Page - coming soon...!</h1> */}
          <div>
            <OrdersTable/>
          </div>
      </div>
    </main>
  );
};

export default Orders;
