import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";
import axios from "axios";

const Checkout = () => {
  const { userAddress, userCart, profileUser, URL } = useContext(AppContext);

  console.log("Printing User Address => ", userAddress.data); // // Getting data on Browser's Console;

  const shortAdres = userAddress.data;

  // // // Formation of new state to store the data in this state and pass it to cart page to render details of user's cart page;
  const [cartQty, setCartQty] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  // // // Formation of useEffect to render the details of total cart qty and price with and side effect;
  useEffect(() => {
    let qtyses = 0;
    let priceses = 0;
    if (userCart?.items) {
      for (let i = 0; i < userCart?.items?.length; i++) {
        qtyses = qtyses + userCart?.items[i].quantity;
        priceses = priceses + userCart?.items[i].price;
      }
    }
    setCartQty(qtyses);
    setCartPrice(priceses);
    console.log(qtyses, priceses); // // Getting data on Browser's Console;
  }, [userCart]);

  const handlerOnPayment = async () => {
    // // // Taking checkout from backend as ( const { amount, cartItems, userShipping, userId } = request.body;)
    try {
      const orderResponse = await axios.post(`${URL}/payment/checkout`, {
        amount: cartPrice,
        cartItems: userCart?.items,
        userShipping: userAddress,
        userId: profileUser._id,
      });
      console.log("OrderResponse ProceedToPay => ", orderResponse); // // Gettting data on Browser's Console;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container  my-3">
        <h1 className="text-center">Order Summary</h1>

        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                Product Details
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                <TableProduct />
              </td>

              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>Name : {shortAdres?.fullName}</li>
                  <li>Phone : {shortAdres?.phoneNumber}</li>
                  <li>Country : {shortAdres?.country}</li>
                  <li>State : {shortAdres?.state}</li>
                  <li>PinCode : {shortAdres?.pincode}</li>
                  <li>Near By : {shortAdres?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container text-center my-5">
        <button
          className="btn btn-secondary btn-lg"
          style={{ fontWeight: "bold" }}
          onClick={handlerOnPayment}
        >
          Procced To Pay
        </button>
      </div>
    </>
  );
};

export default Checkout;
