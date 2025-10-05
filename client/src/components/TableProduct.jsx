import React from "react";

const TableProduct = () => {
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
              ++Qty
            </th>
            <th scope="col" className="bg-dark text-light">
              --Qty
            </th>
            <th scope="col" className="bg-dark text-light">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="bg-dark text-light">
              <img style={{ width: "50px", height: "50px" }} />
            </th>
            <td className="bg-dark text-light">Titles</td>
            <td className="bg-dark text-light">Prices</td>
            <td className="bg-dark text-light">Qty</td>
            <td className="bg-dark text-light">--</td>
            <td className="bg-dark text-light">++</td>
            <td className="bg-dark text-light">Delete</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
