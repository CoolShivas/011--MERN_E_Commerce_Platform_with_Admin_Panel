import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

const isAuthenticated = async (request, response, next) => {
  // // // Getting key (as "Authen") and value (as token) from the request header of POSTMAN i.e,. going to be provided by user;
  const loginToken = request.header("Authen");

  try {
    if (!loginToken) {
      console.log("Please, Login first...by entering your token in header.!");
      return response.json({
        message: "Please, Login first...by entering your token in header.!",
        success: false,
      });
    }

    // // // For verifying the jwt token by user's LoginToken and secret key you have entered at the time of Login user when jwt.sign() you have done;
    let verifyJwtSecretKey = jwt.verify(loginToken, process.env.JWT);

    // // // For identifying user's token that you have entered at the time of Login user when jwt.sign({ userid: loginUser._id } you have done;
    let identifyUserIdOfJwt = verifyJwtSecretKey.userId;

    // // // For confirming the user's token by checking the user's schema having user token or not;
    let confirmUserLoginToken = await User.findById(identifyUserIdOfJwt);

    if (!confirmUserLoginToken) {
      console.log(" Your token is invalid or User not exist...!");
      return response.json({
        message: " Your token is invalid or User not exist...!",
        success: false,
      });
    }

    // // // Now, making the user global for this app by entering this token to their cart and shipping order and payment and all by after authentication only;
    request.confirmUserLoginToken = confirmUserLoginToken;

    // // // Calling next function after isAuthenticated in routes;
    next();
  } catch (error) {
    console.log("Error in isAuthenticated", error.message);
    response.json({ message: error.message, success: false });
  }
};

export default isAuthenticated;
