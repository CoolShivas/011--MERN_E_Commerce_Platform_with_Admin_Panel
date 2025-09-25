import { User } from "../Models/User.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

export const userRegisterFunc = async (request, response) => {
  console.log("Printing the body => ", request.body);
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing the body =>  undefined
   */
  response.json({
    message: "Posting user data",
    success: true,
    data: request.body,
  });
  // // // Open the POSTMAN and select the POST request then enter the URL as (http://localhost:8000/api/user/register) then enter data on the body tag as :-
  /**
   * {
    "name":"arjun",
    "email":"arjun@gmail.com",
    "password":"123"
}
   */
  // // // Then hit the send button to get the response as :-
  /**
   * {
    "message": "Posting user data",
    "success": true
}
   */
  // // // Therefore, we are getting the responses on both Terminal and POSTMAN after connected with the server file in app.js;
};

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////
