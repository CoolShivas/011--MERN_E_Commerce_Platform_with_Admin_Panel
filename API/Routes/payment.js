import express from "express";
import { checkoutFunc } from "../Controllers/payment.js";

const router = express.Router();
// // // @api description :- posting the specific user's payment checkout;
// // // @api method :- post
// // // @api endPoint :- /api/payment/checkout
router.post("/checkout", checkoutFunc);

export default router;
