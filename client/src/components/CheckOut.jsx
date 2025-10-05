import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";

const Checkout = () => {
  const { userAddress } = useContext(AppContext);

  console.log("Printing User Address => ", userAddress.data); // // Getting data on Browser's Console;

  const shortAdres = userAddress.data;

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
        >
          Procced To Pay
        </button>
      </div>
    </>
  );
};

export default Checkout;
