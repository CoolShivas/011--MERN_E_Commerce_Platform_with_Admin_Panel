import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Registeration or Sign-Up function;

export const userRegisterFunc = async (request, response) => {
  const { name, email, password } = request.body;

  try {
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
  } catch (error) {
    console.log("Error occur in signup => ", error.message);
    response.json({ message: error.message, success: false });
  }
};

// // // Ending of User Registeration or Sign-Up function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Login function;

export const userLoginFunc = async (request, response) => {
  const { email, password } = request.body;

  try {
    if (email === "" || password === "") {
      console.log("Please fill all the fields...!");
      return response.json({
        message: "Please fill all the fields...!",
        success: false,
      });
    }

    let loginUser = await User.findOne({ email });

    if (!loginUser) {
      console.log("User not exists...Please, SignUp.!");
      return response.json({
        message: "User not exists...Please, SignUp.!",
        success: false,
      });
    }

    const unHashPassWord = await bcrypt.compare(password, loginUser.password);

    if (!unHashPassWord) {
      console.log("Invalid Login Password");
      return response.json({
        message: "Invalid Login Password",
        success: false,
      });
    }
    // // // Open the POSTMAN and enter URL as (http://localhost:8000/api/user/login) fill the body data and hit send btn. You will get the result both on Terminal and POSTMAN;
    console.log(`Welcome back ${loginUser.name}`, loginUser); // Getting data;
    response.json({
      message: `Welcome back ${loginUser.name}`,
      success: true,
      data: loginUser,
    }); // Getting data;
  } catch (error) {
    console.log("Error occur in login => ", error.message);
    response.json({ message: error.message, success: false });
  }
};

// // // Ending of User Login function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of getting All User function;

export const getAllUserFunc = async (request, response) => {
  try {
    // const getUsers = await User.find(); // Finding and getting all users;
    const getUsers = await User.find().sort({ createdAt: -1 }); // Finding and getting all latest users;
    console.log("Fetching all the users successfully => ", getUsers);
    response.json({
      message: "Fetching all the users successfully...!",
      success: true,
      data: getUsers,
    });
  } catch (error) {
    console.log("Error occurs in get all user => ", error.message);
    response.json({ message: error.message, success: false });
  }
};

// // // Ending of getting All User function;

///////***********************************************************************///////
///////***********************************************************************///////
