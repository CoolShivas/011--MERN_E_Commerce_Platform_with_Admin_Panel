import express from "express";
import {
  addToCartProduct,
  deductToCartProductQty,
  getUserCartProduct,
  removeProdFromCartById,
} from "../Controllers/cart.js";

const router = express.Router();
// // // @api description :- adding the products to specific user's cart;
// // // @api method :- post
// // // @api endPoint :- /api/cart/addcart
router.post("/addcart", addToCartProduct);
// // // @api description :- decreasing the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/cart/dedcart
router.delete("/dedcart", deductToCartProductQty);
// // // @api description :- getting the products of specific user's cart;
// // // @api method :- get
// // // @api endPoint :- /api/cart/usercart
router.get("/usercart", getUserCartProduct);
// // // @api description :- removing the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/cart/removecart/:id
router.delete("/removecart/:idOfProduct", removeProdFromCartById);

export default router;
