import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  // // // We are getting the Back-End product id i.e., (router.get("/:id", getProductByIdFunc)) that the user click on the product it get the product id from Back-End. Now, with the help of useParams we are grabbing it to render data on client;

  const { id } = useParams();

  const [getProID, setGetProID] = useState();

  // // // Use of Back-End API (http://localhost:8000/api/product/allproduct)
  const URL = "http://localhost:8000/api";

  useEffect(() => {
    const fetchAllProducts = async () => {
      const backendAPI = await axios.get(`${URL}/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(backendAPI.data.data); // // Getting data on Browser's Console from Back-End API;
      setGetProID(backendAPI.data.data);
    };

    fetchAllProducts();
  }, [id]);

  return (
    <>
      <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="left">
          {/* It’s a safe way to access properties of an object that might be null or undefined. 
        If getProID is null/undefined, it simply returns undefined (and React won’t render anything for that spot), instead of throwing an error. 
        So, ?. = “check if the object exists first before trying to access the property.”*/}
          <img
            src={getProID?.imgSrc}
            alt="image not found"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <div className="right">
          <h1>{getProID?.title}</h1>
          <p>{getProID?.description}</p>
          <h1>
            {getProID?.price} {"₹"}
          </h1>
          <div>
            <button
              className="btn btn-danger mx-3"
              style={{ fontWeight: "bold" }}
            >
              Buy Now
            </button>
            <button className="btn btn-warning" style={{ fontWeight: "bold" }}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
