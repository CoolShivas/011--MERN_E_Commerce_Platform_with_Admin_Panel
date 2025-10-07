import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const OrderConfirm = () => {
  const { userOrder } = useContext(AppContext);

  console.log("Printing Order Confirmation => ", userOrder);

  return (
    <>
      <center>
        <h1>Welcome to the Order Confirmation Page.</h1>
      </center>
    </>
  );
};

export default OrderConfirm;
