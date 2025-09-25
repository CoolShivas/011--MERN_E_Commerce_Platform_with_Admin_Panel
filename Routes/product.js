import express from "express";
import {
  addProductFunc,
  getAllProductFunc,
  getProductByIdFunc,
} from "../Controllers/product.js";

const router = express.Router();
// // // @api description :- adding the products
// // // @api method :- post
// // // @api endPoint :- /api/product/addproduct
router.post("/addproduct", addProductFunc);
// // // @api description :- getting all the products
// // // @api method :- get
// // // @api endPoint :- /api/product
router.get("/allproduct", getAllProductFunc);
// // // @api description :- getting specific product by id
// // // @api method :- get
// // // @api endPoint :- /api/product/:id
router.get("/:id", getProductByIdFunc);

export default router;
