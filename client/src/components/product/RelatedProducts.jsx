import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const RelatedProducts = ({ pasCategory }) => {
  // // // Getting all the products that we are getting from Back-End API;
  const { pasApiProducts } = useContext(AppContext);
  // console.log(pasApiProducts); // // Getting data on Browser's Console from Context API;

  // // // Comparing the pasApiProducts i.e., (whole product data) with the pasCategory i.e.,(with the click product data) using filter method to get the same products;
  //   const sameCat = pasApiProducts.filter((curElem) => {
  //     return curElem.category === pasCategory;
  //   });

  //   console.log(sameCat); // // Getting data same category data on Browser's Console;

  // // // Handling side effect using useEffect and useState and filter method to render data to Ui;
  const [relatedPro, setRelatedPro] = useState([]);

  useEffect(() => {
    setRelatedPro(
      pasApiProducts.filter((curElem) => {
        return curElem?.category?.toLowerCase() === pasCategory?.toLowerCase();
      })
    );
  }, [pasCategory, pasApiProducts]);

  return (
    <>
      <div className="container text-center">
        <h1>Related Products </h1>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row container d-flex justify-content-center align-items-center my-5">
            {relatedPro?.map((cur) => {
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
      </div>
    </>
  );
};

export default RelatedProducts;
