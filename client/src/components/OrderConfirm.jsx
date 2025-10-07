import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const OrderConfirm = () => {
  const { userOrder } = useContext(AppContext);

  console.log("Printing Order Confirmation => ", userOrder);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Your order has been confirm,</h1>
        <h3 className="text-center">It will delivered soon</h3>
      </div>

      <div className="container">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>OrderId : </li>
                  <li>PaymentId : </li>
                  <li>PaymentStatus : </li>
                  <li>Name : </li>
                  <li>Phone : </li>
                  <li>Country : </li>
                  <li>State : </li>
                  <li>PinCode : </li>
                  <li>Near By : </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderConfirm;
