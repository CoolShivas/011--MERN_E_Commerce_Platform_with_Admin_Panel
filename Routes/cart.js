import express from "express";
import { addToCartProduct } from "../Controllers/cart.js";

const router = express.Router();
// // // @api description :- adding the products to specific user's cart;
// // // @api method :- post
// // // @api endPoint :- /api/product/addcart
router.post("/addcart", addToCartProduct);

export default router;
