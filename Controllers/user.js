import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Registeration or Sign-Up function;

export const userRegisterFunc = async (request, response) => {
  const { name, email, password } = request.body;

  if (name === "" || email === "" || password === "") {
    console.log("Please fill all the fields...!");
    return response.json({
      message: "Please fill all the fields...!",
      success: false,
    });
  }

  let createUser = await User.findOne({ email });

  if (createUser) {
    console.log("User already register. Please, Login...!");
    return response.json({
      message: "User already register. Please, Login...!",
      success: false,
    });
  }

  const hashPassWord = await bcrypt.hash(password, 10);

  createUser = await User.create({ name, email, password: hashPassWord });

  // // // Open the POSTMAN and enter URL as (http://localhost:8000/api/user/register) fill the body data and hit send btn. You will get the result both on Terminal and POSTMAN;
  console.log("User Sign-Up successfully. => ", createUser); // Getting data;

  response.json({
    message: "User Sign-Up successfully....!",
    success: true,
    data: createUser,
  }); // Getting data;
};

// // // Ending of User Registeration or Sign-Up function;

///////***********************************************************************///////
///////***********************************************************************///////
