import express from "express";
import { addShippingAddress } from "../Controllers/address.js";

const router = express.Router();
// // // @api description :- adding the shipping address of specific user's cart containing items;
// // // @api method :- post
// // // @api endPoint :- /api/shipping/addship
router.post("/addship", addShippingAddress);

export default router;
