import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  // // // We are getting the Back-End product id i.e., (router.get("/:id", getProductByIdFunc)) that the user click on the product it get the product id from Back-End. Now, with the help of useParams we are grabbing it to render data on client;

  const { id } = useParams();
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
      console.log(backendAPI); // // Getting data on Browser's Console from Back-End API;
    };

    fetchAllProducts();
  }, [id]);

  return (
    <>
      <center>
        <h1>Welcome to Product Details Page.</h1>
        <h2>You clicked on the product that's id is :- {id}</h2>
      </center>
    </>
  );
};

export default ProductDetails;
