import express from "express";
import {
  addToCartProduct,
  deductToCartProductQty,
  getUserCartProduct,
  makingUserCartEmpty,
  removeProdFromCartById,
} from "../Controllers/cart.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- adding the products to specific user's cart;
// // // @api method :- post
// // // @api endPoint :- /api/cart/addcart
router.post("/addcart", isAuthenticated, addToCartProduct);
// // // @api description :- decreasing the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/cart/dedcart
router.delete("/dedcart", isAuthenticated, deductToCartProductQty);
// // // @api description :- getting the products of specific user's cart;
// // // @api method :- get
// // // @api endPoint :- /api/cart/usercart
router.get("/usercart", isAuthenticated, getUserCartProduct);
// // // @api description :- removing the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/cart/removecart/:id
router.delete(
  "/removecart/:idOfProduct",
  isAuthenticated,
  removeProdFromCartById
);
// // // @api description :- clearing all the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/cart/empty
router.delete("/emptycart", isAuthenticated, makingUserCartEmpty);

export default router;
