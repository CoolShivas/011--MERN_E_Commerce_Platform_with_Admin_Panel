import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const Cart = () => {
  const { userCart } = useContext(AppContext);
  //   console.log(userCart); // // Getting data on Browser's Console;
  return (
    <>
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
              <button className="btn btn-warning mx-3">
                <FaMinus />
              </button>
              <button
                className="btn btn-info mx-3"
                style={{ fontWeight: "bold" }}
              >
                <IoMdAdd />
              </button>
              <button
                className="btn btn-danger mx-3"
                style={{ fontWeight: "bold" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
