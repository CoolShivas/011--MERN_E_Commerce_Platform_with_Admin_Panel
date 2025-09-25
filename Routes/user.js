import express from "express";
import { userRegisterFunc } from "../Controllers/user.js";

const router = express.Router();
// // // @api description :- user signup/register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", userRegisterFunc);

export default router;
