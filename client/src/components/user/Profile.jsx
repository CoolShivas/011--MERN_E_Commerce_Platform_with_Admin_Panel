import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome , User Name </h1>
        <h3> User Email ID </h3>
        <h1>Total Order :- </h1>
      </div>

      <div className="container my-5">
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
              <td className="bg-dark text-light">Showing Order Products</td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>OrderId : </li>
                  <li>PaymentId : </li>
                  <li>PaymentStatus :</li>
                  <li>Name : </li>
                  <li>Phone : </li>
                  <li>Country : </li>
                  <li>State :</li>
                  <li>PinCode :</li>
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

export default Profile;
