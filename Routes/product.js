import express from "express";
import { addProductFunc, getAllProductFunc } from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- adding the products
// // // @api method :- post
// // // @api endPoint :- /api/product/addproduct
router.post("/addproduct", addProductFunc);
// // // @api description :- getting all the products
// // // @api method :- get
// // // @api endPoint :- /api/product
router.get("/allproduct", getAllProductFunc);

export default router;
