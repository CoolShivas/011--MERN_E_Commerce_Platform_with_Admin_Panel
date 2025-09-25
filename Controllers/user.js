import { User } from "../Models/User.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

export const userRegisterFunc = async (request, response) => {
  console.log("Printing the body => ", request.body);
  response.json({
    message: "Posting user data",
    success: true,
    data: request.body,
  });
};

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////
