import express from "express";
import {
  getAllUserFunc,
  getUserProfileFunc,
  userLoginFunc,
  userRegisterFunc,
} from "../Controllers/user.js";
import isAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();
// // // @api description :- user signup/register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", userRegisterFunc);
// // // @api description :- user login
// // // @api method :- post
// // // @api endPoint :- /api/user/login
router.post("/login", userLoginFunc);
// // // @api description :- getting all the users
// // // @api method :- get
// // // @api endPoint :- /api/user/allusers
router.get("/allusers", getAllUserFunc);
// // // @api description :- getting user profile
// // // @api method :- get
// // // @api endPoint :- /api/user/profile
router.get("/profile", isAuthenticated, getUserProfileFunc);

export default router;
