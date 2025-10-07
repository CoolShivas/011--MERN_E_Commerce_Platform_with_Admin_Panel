import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const OrderConfirm = () => {
  const { userOrder } = useContext(AppContext);

  const [latestOrder, setLatestOrder] = useState({});

  console.log("Printing Order Confirmation => ", userOrder); // // Getting data on Browser's Console;

  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]); // // Whenever the user changes it will render that user;

  console.log("Latest Order => ", latestOrder); // // Getting data on Browser's Console;

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
                Order - Items
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                Order-Details & Shipping-Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                {/* <TableProduct cart={cart} /> */}
                new table comes here
              </td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>OrderId :- {latestOrder?.orderId} </li>
                  <li>PaymentId :- {latestOrder?.paymentId} </li>
                  <li>PaymentStatus :- {latestOrder?.payStatus} </li>
                  <li>Name :- {latestOrder?.userShipping?.data?.fullName} </li>
                  <li>
                    Phone :- {latestOrder?.userShipping?.data?.phoneNumber}{" "}
                  </li>
                  <li>
                    Country :- {latestOrder?.userShipping?.data?.country}{" "}
                  </li>
                  <li>State :- {latestOrder?.userShipping?.data?.state} </li>
                  <li>
                    PinCode :- {latestOrder?.userShipping?.data?.pincode}{" "}
                  </li>
                  <li>
                    Near By :- {latestOrder?.userShipping?.data?.address}{" "}
                  </li>
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
