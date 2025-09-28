import express from "express";
import {
  addProductFunc,
  deleteProductByIdFunc,
  getAllProductFunc,
  getProductByIdFunc,
  updateProductByIdFunc,
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
// // // @api description :- updating specific product by id
// // // @api method :- put
// // // @api endPoint :- /api/product/:id
router.put("/:id", updateProductByIdFunc);
// // // @api description :- deleting specific product by id
// // // @api method :- delete
// // // @api endPoint :- /api/product/:id
router.delete("/:id", deleteProductByIdFunc);

export default router;
