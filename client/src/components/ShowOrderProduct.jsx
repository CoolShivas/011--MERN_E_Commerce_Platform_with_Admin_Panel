import React, { useEffect, useState } from "react";

const ShowOrderProduct = ({ itemsOrder }) => {
  console.log("Printing of latest Order items => ", itemsOrder); // // Getting data on Browser's Console;

  // // // Formation of new state to store the data in this state and pass it to cart page to render details of user's cart page;
  const [cartQty, setCartQty] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  // // // Formation of useEffect to render the details of total cart qty and price with and side effect;
  useEffect(() => {
    let qtyses = 0;
    let priceses = 0;
    if (itemsOrder) {
      for (let i = 0; i < itemsOrder?.length; i++) {
        qtyses = qtyses + itemsOrder[i].quantity;
        priceses = priceses + itemsOrder[i].price;
      }
    }
    setCartQty(qtyses);
    setCartPrice(priceses);
    console.log(qtyses, priceses); // // Getting data on Browser's Console;
  }, [itemsOrder]);

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
          </tr>
        </thead>
        <tbody>
          {itemsOrder?.map((product) => (
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
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShowOrderProduct;
