import express from "express";
import { checkoutFunc, verifyPaymentFunc } from "../Controllers/payment.js";

const router = express.Router();
// // // @api description :- posting the specific user's payment checkout;
// // // @api method :- post
// // // @api endPoint :- /api/payment/checkout
router.post("/checkout", checkoutFunc);
// // // @api description :- posting the specific user's payment verification to DB;
// // // @api method :- post
// // // @api endPoint :- /api/payment/verify-payment
router.post("/verify-payment", verifyPaymentFunc);

export default router;
