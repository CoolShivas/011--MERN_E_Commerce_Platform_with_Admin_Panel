import express from "express";
import {
  checkoutFunc,
  userSpecificOrderFunc,
  verifyPaymentFunc,
} from "../Controllers/payment.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- posting the specific user's payment checkout;
// // // @api method :- post
// // // @api endPoint :- /api/payment/checkout
router.post("/checkout", checkoutFunc);
// // // @api description :- posting the specific user's payment verification to DB;
// // // @api method :- post
// // // @api endPoint :- /api/payment/verify-payment
router.post("/verify-payment", verifyPaymentFunc);
// // // @api description :- getting the specific user's order verification to DB;
// // // @api method :- get
// // // @api endPoint :- /api/payment/userorder
router.get("/userorder", isAuthenticated, userSpecificOrderFunc);

export default router;
