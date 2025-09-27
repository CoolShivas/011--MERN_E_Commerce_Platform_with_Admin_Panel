import express from "express";
import {
  addShippingAddress,
  getUserShippingAddress,
} from "../Controllers/address.js";

const router = express.Router();
// // // @api description :- adding the shipping address of specific user's cart containing items;
// // // @api method :- post
// // // @api endPoint :- /api/shipping/addship
router.post("/addship", addShippingAddress);
// // // @api description :- getting the shipping address of specific user's cart containing items;
// // // @api method :- get
// // // @api endPoint :- /api/shipping/getship
router.get("/getship", getUserShippingAddress);

export default router;
