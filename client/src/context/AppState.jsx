import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const AppState = (props) => {
  // // // Formation of useState to pass state and function data of fetchAllProducts;
  const [pasApiProducts, setPasApiProducts] = useState([]);

  // // // Use of Back-End API (http://localhost:8000/api/product/allproduct)
  const URL = "http://localhost:8000/api";

  // // // Formation of filter state to filter out the products on the basis of categories such as(mobiles, laptops, camera and all). So, that why the second array is formed to hold the products and render on by filter method;
  const [filteredProducts, setFIlteredProducts] = useState([]);

  // // //********* */ Starting of Fetching all products from Back-End //********* *// // //

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
      setFIlteredProducts(backendAPI.data.data);
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
    // alert(backendAPI.data.message); // // Showing alet msg if user already registered;

    toast.success(backendAPI.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    console.log("Sended Sign-Up details to Backend => ", backendAPI); // // Getting data on Browser's Console from Back-End API;
    return backendAPI.data;
  };

  // // //********* */ Ending of Fetching register api from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching login api from Back-End //********* *// // //

  const fetchingLogin = async (email, password) => {
    // // // This (name, email, password) comes from Front-End Sign-Up form when user fill the details;
    const backendAPI = await axios.post(
      `${URL}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // alert(backendAPI.data.message); // // Showing alet msg if user already registered;

    toast.success(backendAPI.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    console.log("Sended Log-In details to Backend => ", backendAPI); // // Getting data on Browser's Console from Back-End API;
    return backendAPI.data;
  };

  // // //********* */ Ending of Fetching login api from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  return (
    <AppContext.Provider
      value={{
        pasApiProducts,
        fetchingRegister,
        fetchingLogin,
        filteredProducts,
        setFIlteredProducts,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
