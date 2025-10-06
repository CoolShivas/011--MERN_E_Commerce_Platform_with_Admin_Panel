import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const TableProduct = () => {
  const {
    userCart,
    fetchingDecreaseCartQty,
    fetchingAddToCart,
    fetchingRemoveFromCart,
  } = useContext(AppContext);

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
      <table className="table table-bordered border-primary bg-dark text-center">
        <thead>
          <tr>
            <th scope="col" className="bg-dark text-light">
              Product Img
            </th>
            <th scope="col" className="bg-dark text-light">
              Title
            </th>
            <th scope="col" className="bg-dark text-light">
              Price
            </th>
            <th scope="col" className="bg-dark text-light">
              Qty
            </th>
            <th scope="col" className="bg-dark text-light">
              Qty++
            </th>
            <th scope="col" className="bg-dark text-light">
              Qty--
            </th>
            <th scope="col" className="bg-dark text-light">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {userCart?.items?.map((product) => (
            <tr key={product._id}>
              <th scope="row" className="bg-dark text-light">
                <img
                  src={product.imgSrc}
                  style={{ width: "50px", height: "50px" }}
                />
              </th>
              <td className="bg-dark text-light">{product.title}</td>
              <td className="bg-dark text-light">{product.price}</td>
              <td className="bg-dark text-light">{product.quantity}</td>
              <td className="bg-dark text-light">
                <span
                  className="material-symbols-outlined"
                  onClick={() =>
                    fetchingAddToCart(
                      product?.productId,
                      product.title,
                      product.price / product.quantity,
                      1,
                      product.imgSrc
                    )
                  }
                >
                  add_circle
                </span>
              </td>
              <td className="bg-dark text-light">
                <span
                  className="material-symbols-outlined"
                  onClick={() => fetchingDecreaseCartQty(product?.productId, 1)}
                >
                  do_not_disturb_on
                </span>
              </td>
              <td className="bg-dark text-light">
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    if (confirm("Are you sure, want remove from cart")) {
                      fetchingRemoveFromCart(product?.productId);
                    }
                  }}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}

          <tr>
            <th scope="row" className="bg-dark text-light"></th>
            <td className="bg-dark text-light">
              <button
                className="btn btn-primary"
                style={{ fontWeight: "bold" }}
              >
                Total
              </button>
            </td>
            <td className="bg-dark text-light">
              <button
                className="btn btn-warning"
                style={{ fontWeight: "bold" }}
              >
                {cartPrice}
              </button>
            </td>
            <td className="bg-dark text-light">
              <button className="btn btn-info" style={{ fontWeight: "bold" }}>
                {cartQty}
              </button>
            </td>
            <td className="bg-dark text-light"></td>
            <td className="bg-dark text-light"></td>
            <td className="bg-dark text-light"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
