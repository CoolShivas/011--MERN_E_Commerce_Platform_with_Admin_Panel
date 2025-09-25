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
  // // // After using bodyParse.json. We are getting the data instead of undefined
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing the body =>  { name: 'arjun', email: 'arjun@gmail.com', password: '123' }
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
  // // // After using bodyParse.json. We are not getting the  (data: request.body,) now getting it;
  /**
   * {
    "message": "Posting user data",
    "success": true,
    "data": {
        "name": "arjun",
        "email": "arjun@gmail.com",
        "password": "123"
    }
}
   */
};

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////
