import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const Cart = () => {
  const {
    userCart,
    fetchingDecreaseCartQty,
    fetchingAddToCart,
    fetchingRemoveFromCart,
    fetchingCartClearAll,
  } = useContext(AppContext);
  // console.log(userCart); // // Getting data on Browser's Console;

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

  return (
    <>
      {/* Starting of Displaying Total Quantity and Price of over-all items in the User Cart */}
      <div className="my-5 text-center">
        <button
          className="btn btn-info mx-3"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Total Quantity :- {cartQty}
        </button>
        <button
          className="btn btn-warning mx-3"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Total Price :- {cartPrice}
        </button>
      </div>
      {/* Ending of Displaying Total Quantity and Price of over-all items in the User Cart */}

      {/* Starting of Rendering of items details with Qty increase/decrease btns */}
      {userCart?.items?.map((product) => (
        <div
          key={product._id}
          className="container p-3 bg-dark my-5 text-center"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="cart_img">
              <img
                src={product.imgSrc}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="cart_des">
              <h5>{product.title}</h5>
              <h4>{product.price}</h4>
              <h4>Qty :- {product.quantity}</h4>
            </div>
            <div className="cart_action">
              <button
                className="btn btn-warning mx-3"
                onClick={() => {
                  fetchingDecreaseCartQty(product.productId, 1);
                }}
              >
                <FaMinus />
              </button>
              <button
                className="btn btn-info mx-3"
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  fetchingAddToCart(
                    product?.productId,
                    product.title,
                    product.price / product.quantity, // // Taking out the original price of the product by divinding quantity with price;
                    1,
                    product.imgSrc
                  );
                }}
              >
                <IoMdAdd />
              </button>
              <button
                className="btn btn-danger mx-3"
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  if (confirm("Are you sure, you want to remove this item.")) {
                    fetchingRemoveFromCart(product?.productId);
                  }
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Ending of Rendering of items details with Qty increase/decrease btns */}

      {/* Starting of Displaying of Check Out and Clear all btns */}
      <div className="container text-center">
        <button className="btn btn-warning mx-3" style={{ fontWeight: "bold" }}>
          Check Out
        </button>
        <button
          className="btn btn-danger mx-3"
          style={{ fontWeight: "bold" }}
          onClick={fetchingCartClearAll}
        >
          Clear All
        </button>
      </div>
      {/* Ending of Displaying of Check Out and Clear all btns */}
    </>
  );
};

export default Cart;
