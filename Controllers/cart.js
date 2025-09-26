import { Cart } from "../Models/Cart.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add Product to particular User's Cart function;

export const addToCartProduct = async (req, res) => {
  // // // Getting all the things from the request body of POSTMAN;
  const { productId, title, price, quantity, imgSrc } = req.body;

  // // // Giving the hard coded user id to add the items in specific user cart;
  let userId = "68d50b0461b0791ae03d8e2c";

  // // // Finding the user by it's id token whether it's cart exits or not;
  let createUserCart = await Cart.findOne({ userId });

  if (!createUserCart) {
    // // // If user don't have a cart making the new cart to the specific user;
    createUserCart = new Cart({ userId, items: [] });
  }

  // // // Finding the index of the product if that product index already exists;
  let itemIndex = createUserCart.items.findIndex((proIndex) => {
    return proIndex.productId.toString() === productId;
  });
  // // // After getting the index number of the product index that already exists. Then, increase the quantity of that product and also price too ;
  if (itemIndex > -1) {
    createUserCart.items[itemIndex].quantity += quantity;
    createUserCart.items[itemIndex].price += price * quantity;
  } else {
    // // // Pushing the items to cart of a specific user's cart;
    createUserCart.items.push({ productId, title, price, quantity, imgSrc });
  }

  // // // Saving the specific user's cart on the database;
  await createUserCart.save();

  // // // Open the POSTMAN and select the POST request then enter the URL as (http://localhost:8000/api/cart/addcart) then fill the data on the body then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log(
    "Item added in the user cart successfully..! => ",
    createUserCart
  ); // // Getting data;
  res.json({
    message: "Item added in the user cart successfully..!",
    success: true,
    data: createUserCart,
  }); // // Getting data;
};

// // // Ending of Add Product to particular User's Cart function;

///////***********************************************************************///////
///////***********************************************************************///////
