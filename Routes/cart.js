import express from "express";
import {
  addToCartProduct,
  deductToCartProductQty,
} from "../Controllers/cart.js";

const router = express.Router();
// // // @api description :- adding the products to specific user's cart;
// // // @api method :- post
// // // @api endPoint :- /api/product/addcart
router.post("/addcart", addToCartProduct);
// // // @api description :- decreasing the products of specific user's cart;
// // // @api method :- delete
// // // @api endPoint :- /api/product/dedcart
router.delete("/dedcart", deductToCartProductQty);

export default router;
