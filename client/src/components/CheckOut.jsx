import React from "react";

const CheckOut = () => {
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
              <td className="bg-dark text-light"></td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>Name :</li>
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

export default CheckOut;
