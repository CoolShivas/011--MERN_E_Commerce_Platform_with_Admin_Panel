import { Cart } from "../Models/Cart.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add Product to particular User's Cart function;

export const addToCartProduct = async (req, res) => {
  console.log("User cart added", req.body); // // Getting data;
  res.json({
    message: "User cart is created successfully...!",
    success: true,
    data: req.body,
  }); // // Getting data;
};

// // // Ending of Add Product to particular User's Cart function;

///////***********************************************************************///////
///////***********************************************************************///////
