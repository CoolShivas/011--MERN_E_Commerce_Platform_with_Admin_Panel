import express from "express";
import { addToCartProduct } from "../Controllers/cart.js";

const router = express.Router();

router.post("/addcart", addToCartProduct);

export default router;
