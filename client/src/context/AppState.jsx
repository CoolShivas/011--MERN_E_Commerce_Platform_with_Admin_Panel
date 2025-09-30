import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  // // //********* */ Starting of Fetching all products from Back-End //********* *// // //

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
      // console.log(backendAPI); // // Getting data on Browser's Console from Back-End API;
      setPasApiProducts(backendAPI.data.data);
    };
    // // // Calling the function here;
    fetchAllProducts();
  }, []);

  // // //********* */ Ending of Fetching all products from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching register api from Back-End //********* *// // //

  const fetchingRegister = async (name, email, password) => {
    // // // This (name, email, password) comes from Front-End Sign-Up form when user fill the details;
    const backendAPI = await axios.post(
      `${URL}/user/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    alert(backendAPI.data.message); // // Showing alet msg if user already registered;
    console.log("Sended Sign-Up details to Backend => ", backendAPI); // // Getting data on Browser's Console from Back-End API;
  };

  // // //********* */ Ending of Fetching register api from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  return (
    <AppContext.Provider value={{ pasApiProducts, fetchingRegister }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
