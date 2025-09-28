import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  // // // Formation of useState to pass state and function data of fetchAllProducts;
  const [pasApiProducts, setPasApiProducts] = useState([]);

  // // // Use of Back-End API (http://localhost:8000/api/product/allproduct)
  const URL = "http://localhost:8000/api";

  useEffect(() => {
    // // // Formation of fetch product function;
    const fetchAllProducts = async () => {
      const backendAPI = await axios.get(`${URL}/product/allproduct`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(backendAPI); // // Getting data on Browser's Console from Back-End API;
      setPasApiProducts(backendAPI.data.data);
    };
    // // // Calling the function here;
    fetchAllProducts();
  }, []);

  return (
    <AppContext.Provider value={{ pasApiProducts }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
