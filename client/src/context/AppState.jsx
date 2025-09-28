import React, { useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  // // // Passing random data on client side for testing;
  const data = "Getting the data from Context API.";

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
    };
    // // // Calling the function here;
    fetchAllProducts();
  }, []);

  return (
    <AppContext.Provider value={{ data }}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
