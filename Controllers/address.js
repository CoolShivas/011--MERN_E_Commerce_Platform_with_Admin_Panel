import { Address } from "../Models/Address.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add Shipping Address of a particular User's having cart items function;

export const addShippingAddress = async (req, res) => {
  const { fullName, address, city, state, country, pincode, phoneNumber } =
    req.body;

  // // // Taking the global user id to proceed with cart items for payment of a specific user cart;
  let userId = req.confirmUserLoginToken;

  if (
    fullName === "" ||
    address === "" ||
    city === "" ||
    state === "" ||
    country === "" ||
    pincode === "" ||
    phoneNumber === ""
  ) {
    console.log("Please, fill all the fields...!");
    return res.json({
      message: "Please, fill all the fields...!",
      success: false,
    });
  }

  // // // Creating the Shipping Address of specific User having cart containing items. To proceed with the User's address details;
  let userShipAddress = await Address.create({
    userId,
    fullName,
    address,
    city,
    state,
    country,
    pincode,
    phoneNumber,
  });

  // // // Open the POSTMAN and select the POST request then enter the URL as (http://localhost:8000/api/shipping/addship) then fill the data on the body then header with key and value then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log("Shipping address saved successfully...!", userShipAddress); // // Getting data;
  res.json({
    message: "Shipping address saved successfully...!",
    success: true,
    data: userShipAddress,
  }); // // Getting data;
};

// // // Ending of Add Shipping Address of a particular User's having cart items function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Getting specific User Shipping Address function;

export const getUserShippingAddress = async (req, res) => {
  let userId = req.confirmUserLoginToken;

  let getUserAddress = await Address.find({ userId }).sort({ createdAt: -1 });
  // // // Using sort method with createdAt (.sort({ createdAt: -1 })) to get the recent added shipping address of a user;

  // // // Open the POSTMAN and select the GET request then enter the URL as (http://localhost:8000/api/shipping/getship) then header with key and value then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log("Fetching specific user address", getUserAddress[0]); // // Getting data;
  res.json({
    message: "Fetching specific user address",
    success: true,
    data: getUserAddress[0], // // Getting the first user only;
  }); // // Getting data;
};

// // // Ending of Getting specific User Shipping Address function;

///////***********************************************************************///////
///////***********************************************************************///////
