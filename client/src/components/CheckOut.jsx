import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const { userAddress, userCart, profileUser, URL, fetchingCartClearAll } =
    useContext(AppContext);

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
        quantity: cartQty,
        cartItems: userCart?.items,
        userShipping: userAddress,
        userId: profileUser._id,
      });
      console.log("OrderResponse ProceedToPay => ", orderResponse); // // Gettting data on Browser's Console;

      const { orderId, amount: orderAmount } = orderResponse.data;

      const options = {
        key: "rzp_test_RQCS3C4A0z2dPL",
        amount: orderAmount * 100, // amount is in currency sub-units;
        currency: "INR",
        name: "Apna Store",
        description: "Apna Store",
        order_id: orderId,
        handler: async function (response) {
          // // // These details will sended to Back-End Controllers/payment.js function verifyPaymentFunc;
          const paymentData = {
            orderId: response.razorpay_payment_id,
            paymentId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItems: userCart?.items,
            userId: profileUser._id,
            userShipping: userAddress,
          };

          const apies = await axios.post(
            `${URL}/payment/verify-payment`,
            paymentData
          );

          console.log("RazorPay Response => ", apies);

          if (apies.data.success) {
            fetchingCartClearAll();
            navigate("/orderconfirmation");
          }
        },
        prefill: {
          name: "Apna Store",
          email: "apnastore@gmail.com",
          contact: "9009397438",
        },
        notes: { address: "Karnel Gunj" },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
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
