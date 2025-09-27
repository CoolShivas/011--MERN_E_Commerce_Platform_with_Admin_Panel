import express from "express";
import {
  addShippingAddress,
  getUserShippingAddress,
} from "../Controllers/address.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- adding the shipping address of specific user's cart containing items;
// // // @api method :- post
// // // @api endPoint :- /api/shipping/addship
router.post("/addship", isAuthenticated, addShippingAddress);
// // // @api description :- getting the shipping address of specific user's cart containing items;
// // // @api method :- get
// // // @api endPoint :- /api/shipping/getship
router.get("/getship", isAuthenticated, getUserShippingAddress);

export default router;
