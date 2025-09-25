import express from "express";
import { userLoginFunc, userRegisterFunc } from "../Controllers/user.js";

const router = express.Router();
// // // @api description :- user signup/register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", userRegisterFunc);
// // // @api description :- user login
// // // @api method :- post
// // // @api endPoint :- /api/user/login
router.post("/login", userLoginFunc);

export default router;
