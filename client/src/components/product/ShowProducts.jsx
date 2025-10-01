import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const { pasApiProducts, filteredProducts } = useContext(AppContext);
  // console.log(pasApiProducts[0].title); // // Getting data on Browser's Console;
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row container d-flex justify-content-center align-items-center my-5">
          {filteredProducts?.map((cur) => {
            return (
              <div
                key={cur?._id}
                className="my-3 col-md-4 d-flex justify-content-center align-items-center"
              >
                <div
                  className="card bg-dark text-light text-center"
                  style={{ width: "18rem" }}
                >
                  <Link
                    to={`/product/${cur?._id}`}
                    className="d-flex justify-content-center align-items-center p-3"
                  >
                    <img
                      src={cur?.imgSrc}
                      alt="image not found"
                      className="card-img-top"
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                        border: "2px solid yellow",
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{cur?.title}</h5>
                    <div className="my-3">
                      <button className="btn btn-primary mx-3">
                        {cur?.price} {"₹"}
                      </button>
                      <button className="btn btn-warning">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
