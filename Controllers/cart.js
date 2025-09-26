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

// // // Starting of Deduct Product to particular User's Cart function;

export const deductToCartProductQty = async (req, res) => {
  // // // Getting all the things from the request body of POSTMAN;
  const { productId, quantity } = req.body;

  // // // Giving the hard coded user id to add the items in specific user cart;
  let userId = "68d50b0461b0791ae03d8e2c";

  // // // Finding the user by it's id token whether it's cart exits or not;
  let decreaseUserCart = await Cart.findOne({ userId });

  if (!decreaseUserCart) {
    // // // If user don't have a cart making the new cart to the specific user;
    decreaseUserCart = new Cart({ userId, items: [] });
  }

  // // // Finding the index of the product if that product index already exists;
  let itemIndex = decreaseUserCart.items.findIndex((proIndex) => {
    return proIndex.productId.toString() === productId;
  });
  // // // After getting the index number of the product index that already exists. Then, increase the quantity of that product and also price too ;
  if (itemIndex > -1) {
    // // // Making new variable that contains the cart with all items of the specific user;
    const havingProdItem = decreaseUserCart.items[itemIndex];

    // // // If quantity greater than having cart quantity;
    if (havingProdItem.quantity > quantity) {
      // // // Reducing the quantity and price of the cart items;
      const pricePerUnit = havingProdItem.price / havingProdItem.quantity;

      havingProdItem.quantity -= quantity;
      havingProdItem.price -= pricePerUnit * quantity;
    } else {
      // // // splice(startIndex, deleteCount) → removes (or replaces) elements from an array in place.
      decreaseUserCart.items.splice(itemIndex, 1);
    }
  } else {
    console.log("Invalid product id");
    return res.json({ message: "Invalid product id", success: false });
  }

  // // // Saving the specific user's cart on the database;
  await decreaseUserCart.save();

  // // // Open the POSTMAN and select the DELETE request then enter the URL as (http://localhost:8000/api/cart/dedcart) then fill the data on the body then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log(
    "Item deducted from the user cart successfully..! => ",
    decreaseUserCart
  ); // // Getting decrease data and blank items array;
  res.json({
    message: "Item deducted from the user cart successfully..!",
    success: true,
    data: decreaseUserCart,
  }); // // Getting decrease data and blank items array;
};

// // // Ending of Deduct Product to particular User's Cart function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Getting the products of specific user's cart;

export const getUserCartProduct = async (req, res) => {
  // // // Giving the hard coded user id to add the items in specific user cart;
  let userId = "68d50b0461b0791ae03d8e2c";

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    console.log("User cart not found");
    return res.json({ message: "User cart not found", success: false });
  }
  // // // Open the POSTMAN and select the GET request then enter the URL as (http://localhost:8000/api/cart/usercart) then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log("Fetching specific user cart successfully...!", cart); // // Getting decrease data;
  res.json({
    message: "Fetching specific user cart successfully...!",
    success: true,
    cart,
  }); // // Getting decrease data;
};
// // // Ending of Getting the products of specific user's cart;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Removing the product from cart of specific user;

export const removeProdFromCartById = async (req, res) => {
  // // // Getting the productId from the URL that the user going to paste in the POSTMAN;
  const productId = req.params.idOfProduct;
  // // // Giving the hard coded user id to add the items in specific user cart;
  let userId = "68d50b0461b0791ae03d8e2c";

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    console.log("Cart not found");
    return res.json({ message: "Cart not found", success: false });
  }

  // // // Filtering out the unmatch product which doesn't match the user's provided productId. If match then ignore that product showing rest of the products in the cart;
  cart.items = cart.items.filter((curItems) => {
    return curItems.productId.toString() !== productId;
  });

  // // // Saving the specific user's cart on the database;
  await cart.save();
  // // // Open the POSTMAN and select the GET request then enter the URL as (http://localhost:8000/api/cart/removecart/68d632bf03bf4115833b5ffa) then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log("Product has been removed from cart successfully...!"); // // Getting data;
  res.json({
    message: "Product has been removed from cart successfully...!",
    success: true,
  }); // // Getting data;
};

// // // Ending of Removing the product from cart of specific user;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Making the User Cart Empty;

export const makingUserCartEmpty = async (req, res) => {
  // // // Giving the hard coded user id to add the items in specific user cart;
  let userId = "68d50b0461b0791ae03d8e2c";

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ items: [] });
  } else {
    cart.items = [];
  }
  // // // Saving the specific user's cart on the database;
  await cart.save();
  // // // Open the POSTMAN and select the GET request then enter the URL as (http://localhost:8000/api/cart/emptycart) then hit the send btn. You will get the response both on POSTMAN and Terminal;
  console.log("Cart is empty successfully....!"); // // Getting data;
  res.json({ message: "Cart is empty successfully....!", success: true }); // // Getting data;
};

// // // Ending of Making the User Cart Empty;

///////***********************************************************************///////
///////***********************************************************************///////
