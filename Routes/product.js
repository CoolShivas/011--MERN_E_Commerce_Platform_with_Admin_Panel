import express from "express";
import { addProductFunc } from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- adding the products
// // // @api method :- post
// // // @api endPoint :- /api/product/addproduct
router.post("/addproduct", addProductFunc);

export default router;
