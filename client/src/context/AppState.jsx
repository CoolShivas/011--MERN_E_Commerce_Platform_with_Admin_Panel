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

  // // // Formation of token state to save the Back-End API login token in this below state by which we will also authenticate the user also. By which we will not login the user again and again;
  const [isLoginToken, setIsLoginToken] = useState([]);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  // // // Formation of new state to store the data in this state and pass it to profile page to render details of user on profile page;
  const [profileUser, setProfileUser] = useState();

  // // // Formation of new state to store the user's cart items in this state and pass it to profile page to render details of user on profile page;
  const [userCart, setUserCart] = useState([]);
  // // // Formation of new state to reflect the user's cart items badge number when the useEffect re-render;
  const [reloadCart, setReloadCart] = useState(false);

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

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
      fetchingUserProfile(); // // Calling here, because whenever the user reload that time also fetch the user profile too;
    };
    // // // Calling the function here;
    fetchAllProducts();
    fetchingUserCart(); // // Whenver the user refresh also the get/show their user cart items;
    fetchingGetUserShipAddress(); // // Whenver the user refresh also the get user address;
  }, [isLoginToken, reloadCart]); // // To re-render the particular login user cart and details related to that account;

  // // //********* */ Ending of Fetching all products from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Getting the Local Storage token to render the same user after page refreshing instead of Login/Register again. //********* *// // //

  useEffect(() => {
    const getLocalStoreToken = localStorage.getItem("token");

    // // // If getting token from the local storage then again making the state to setIsLoginToken and setIsAuthentiacte to true;
    if (getLocalStoreToken) {
      setIsLoginToken(getLocalStoreToken);
      setIsAuthenticate(true);
    }
  }, []);

  // // //********* */ Ending of Getting the Local Storage token to render the same user after page refreshing instead of Login/Register again. //********* *// // //

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
      position: "bottom-left",
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
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    console.log("Sended Log-In details to Backend => ", backendAPI.data.token); // // Getting data on Browser's Console from Back-End API;

    setIsLoginToken(backendAPI.data.token); // // If user login then storing it's token in state;
    setIsAuthenticate(true); // // Making that user state true if login;
    localStorage.setItem("token", backendAPI.data.token); // // Storing the token on local storage also;

    return backendAPI.data;
  };

  // // //********* */ Ending of Fetching login api from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching logout api from Back-End //********* *// // //

  const fetchingLogout = async () => {
    setIsLoginToken(" ");
    setIsAuthenticate(false);
    localStorage.removeItem("token");
    toast.success("Logout Successfully...!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // // //********* */ Ending of Fetching logout api from Back-End //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching user profile from Back-End API //********* *// // //

  const fetchingUserProfile = async () => {
    const backendAPI = await axios.get(`${URL}/user/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authen: isLoginToken,
      },
      withCredentials: true,
    });
    console.log("Fetching User Profile => ", backendAPI.data); // // Getting all the details related to user on Browser's Console;
    setProfileUser(backendAPI.data); // // Storing the data in this state and pass it to profile page to render details of user on profile page;
  };

  // // //********* */ Ending of Fetching user profile from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching user profile from Back-End API //********* *// // //

  const fetchingAddToCart = async (
    productId,
    title,
    price,
    quantity,
    imgSrc
  ) => {
    const backendAPI = await axios.post(
      `${URL}/cart/addcart`,
      { productId, title, price, quantity, imgSrc },
      {
        headers: {
          "Content-Type": "application/json",
          Authen: isLoginToken,
        },
        withCredentials: true,
      }
    );
    console.log("Fetching Add To Cart => ", backendAPI.data); // // Getting all the details related to user on Browser's Console;
    setReloadCart(!reloadCart); // // Whenever the item added to cart make the state false on re-render of useEffect it will be true or show the badge numnber of cart;
    toast.success(backendAPI.data.message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // // //********* */ Ending of Fetching user profile from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching user cart from Back-End API //********* *// // //

  const fetchingUserCart = async () => {
    const backendAPI = await axios.get(`${URL}/cart/usercart`, {
      headers: {
        "Content-Type": "application/json",
        Authen: isLoginToken,
      },
      withCredentials: true,
    });
    console.log("Fetching User Cart => ", backendAPI.data.cart); // // Getting all the details related to user on Browser's Console;
    setUserCart(backendAPI.data.cart);
  };

  // // //********* */ Ending of Fetching user cart from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching Cart Decreasing Quantity from Back-End API //********* *// // //

  const fetchingDecreaseCartQty = async (productId, quantity) => {
    const backendAPI = await axios.post(
      `${URL}/cart/dedcart`,
      { productId, quantity },
      {
        headers: {
          "Content-Type": "application/json",
          Authen: isLoginToken,
        },
        withCredentials: true,
      }
    );
    console.log("Fetching Decrease Cart Qty => ", backendAPI.data); // // Getting all the details related to user on Browser's Console;
    setReloadCart(!reloadCart); // // Whenever the item added to cart make the state false on re-render of useEffect it will be true or show the badge numnber of cart;
    toast.success(backendAPI.data.message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // // //********* */ Ending of Fetching Cart Decreasing Quantity from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching Remove from Cart from Back-End API //********* *// // //

  const fetchingRemoveFromCart = async (productId) => {
    const backendAPI = await axios.delete(
      `${URL}/cart/removecart/${productId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authen: isLoginToken,
        },
        withCredentials: true,
      }
    );
    console.log("Fetching Remove from Cart => ", backendAPI.data); // // Getting all the details related to user on Browser's Console;
    setReloadCart(!reloadCart); // // Whenever the item added to cart make the state false on re-render of useEffect it will be true or show the badge numnber of cart;
    toast.success(backendAPI.data.message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // // //********* */ Ending of Fetching Remove from Cart from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching Clear all Cart from Back-End API //********* *// // //

  const fetchingCartClearAll = async () => {
    const backendAPI = await axios.delete(`${URL}/cart/emptycart`, {
      headers: {
        "Content-Type": "application/json",
        Authen: isLoginToken,
      },
      withCredentials: true,
    });
    console.log("Fetching Clear All Cart => ", backendAPI.data); // // Getting all the details related to user on Browser's Console;
    setReloadCart(!reloadCart); // // Whenever the item added to cart make the state false on re-render of useEffect it will be true or show the badge numnber of cart;
    toast.success(backendAPI.data.message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // // //********* */ Ending of Fetching Clear all Cart from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching Add Address from Back-End API //********* *// // //

  // // // This ( fullName, address, city, state, country, pincode, phoneNumber) comes from Front-End Shipping Address page form when user fill the details;
  const fetchingShippingAddress = async (
    fullName,
    address,
    city,
    state,
    country,
    pincode,
    phoneNumber
  ) => {
    const backendAPI = await axios.post(
      `${URL}/shipping/addship`,
      { fullName, address, city, state, country, pincode, phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Authen: isLoginToken,
        },
        withCredentials: true,
      }
    );

    toast.success(backendAPI.data.message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setReloadCart(!reloadCart);

    console.log("Sended Shipping Address details to Backend => ", backendAPI); // // Getting data on Browser's Console from Back-End API;

    return backendAPI.data;
  };

  // // //********* */ Ending of Fetching Add Address from Back-End API //********* *// // //

  // // // ////********************************************************************************* */
  // // // ////********************************************************************************* */

  // // //********* */ Starting of Fetching Get User Latest Address from Back-End API //********* *// // //

  // // // This ( fullName, address, city, state, country, pincode, phoneNumber) comes from Front-End Shipping Address page form when user fill the details;
  const fetchingGetUserShipAddress = async () => {
    const backendAPI = await axios.get(`${URL}/shipping/getship`, {
      headers: {
        "Content-Type": "application/json",
        Authen: isLoginToken,
      },
      withCredentials: true,
    });

    console.log("Getting Shipping Address from Backend => ", backendAPI); // // Getting data on Browser's Console from Back-End API;
  };

  // // //********* */ Ending of Fetching Get User Latest Address from Back-End API //********* *// // //

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
        isLoginToken,
        isAuthenticate,
        setIsAuthenticate,
        fetchingLogout,
        fetchingUserProfile,
        profileUser,
        fetchingAddToCart,
        userCart,
        fetchingDecreaseCartQty,
        fetchingRemoveFromCart,
        fetchingCartClearAll,
        fetchingShippingAddress,
        fetchingGetUserShipAddress,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
