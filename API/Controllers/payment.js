import dotenv from "dotenv";
import Razorpay from "razorpay";
import { Payment } from "../Models/Payment.js";

// // //  Load environment variables
dotenv.config();

// // //  Check if env variables are loaded
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
  throw new Error("Missing Razorpay credentials in .env file");
}

// // //  Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of checkoutFunc for the order summary for payment shippment;

export const checkoutFunc = async (req, res) => {
  // // //  The below things going to be provided by user from POSTMAN i.e, from Front-End;
  const { amount, cartItems, userShipping, userId } = req.body;
  try {
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      orderId: order.id,
      amount,
      cartItems,
      userShipping,
      userId,
      payStatus: "created",
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({
      success: false,
      message: "Payment initialization failed",
      error: error.message,
    });
  }
};

// // // Ending of checkoutFunc for the order summary for payment shippment;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of verifyPaymentFunc for the payment confirmation and saving to DB;

export const verifyPaymentFunc = async (req, res) => {
  // // //  The below things going to be provided by user from POSTMAN i.e, from Front-End;
  const {
    orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
  } = req.body;

  // // // Saving all the details to DB as per Payment Schema;
  let orderConfirm = await Payment.create({
    orderId,
    paymentId,
    signature,
    amount,
    orderItems,
    userId,
    userShipping,
    payStatus: "paid",
  });

  res.json({ message: "payment successfull...", success: true, orderConfirm });
};

// // // Ending of verifyPaymentFunc for the payment confirmation and saving to DB;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of userSpecificOrderFunc for the order confirmation;

export const userSpecificOrderFunc = async (req, res) => {
  let userId = req.confirmUserLoginToken_id;
  // console.log("user specific order id => ", userId);

  let orders = await Payment.find({ userId: userId }).sort({ orderDate: -1 });

  console.log("userSpecificOrder => ", orders);
  res.json(orders);
  // // // Open the POSTMAN select the GET request then enter the url as (http://localhost:8000/api/payment/userorder) fill headers key and value with auth token then hit the send btn;
  // // // Therefore, we will get specific user payment all details with items record of a specific user;
  /**
   * [
    {
        "_id": "68e4d1b17f6d9c9f0a5f63a0",
        "payStatus": "paid",
        "orderId": "pay_RQWIj4ISNDYBp5",
        "paymentId": "order_RQWI4cFPimadec",
        "signature": "588ff4cddb9745a57eefb704eb145dadb13b33394ea2ab59170c3b132fb33651",
        "amount": 35497,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e27b754155bdc9d54a0eba"
            },
            {
                "productId": "68d62fb203bf4115833b5fd1",
                "title": "OPPO K13 5G",
                "price": 16499,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/419ICBzEMVL.jpg",
                "_id": "68e3a8d8c2f7fe38ce6ecc7f"
            },
            {
                "productId": "68d6329603bf4115833b5ff2",
                "title": "iQOO Neo",
                "price": 2800,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/610NUM9jlxL._SL1200_.jpg",
                "_id": "68e4d1657f6d9c9f0a5f6373"
            },
            {
                "productId": "68d6329c03bf4115833b5ff4",
                "title": "Realme NARZO",
                "price": 9000,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/71Vjn1DfArL._SL1500_.jpg",
                "_id": "68e4d1677f6d9c9f0a5f6383"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e2625c4155bdc9d54a0c98",
                "userId": "68dfd1f3243bfd005ef55eb1",
                "fullName": "Mohd. Umar Khan",
                "address": "adfasd",
                "city": "Guna",
                "state": "Madhya Pradesh",
                "country": "India",
                "pincode": 473001,
                "phoneNumber": 31231312,
                "createdAt": "2025-10-05T12:19:40.548Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:39:13.910Z",
        "__v": 0
    },
    {
        "_id": "68e4cffefae36689f97c1723",
        "payStatus": "paid",
        "orderId": "pay_RQWB507oI5UiMJ",
        "paymentId": "order_RQWAWE5TO6jqeT",
        "signature": "096370dad11b354d61ca8bb4b131267eba9f5c75604fd57fa94da508284f7305",
        "amount": 23596,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e0da2e6c26793948735c79"
            },
            {
                "productId": "68d81cbd2f66072eb5b0110a",
                "title": "Techno",
                "price": 16398,
                "quantity": 2,
                "imgSrc": "https://www.designinfo.in/wp-content/uploads/2022/09/Tecno-Spark-10C-Magic-Skin-Orange-128-GB-8-GB-RAM-2-485x485-optimized.webp",
                "_id": "68e0da2f6c26793948735c82"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e253f14155bdc9d54a0bbf",
                "userId": "68dfd244243bfd005ef55eed",
                "fullName": "Hemendra Chouhan",
                "address": "New Road",
                "city": "Guna",
                "state": "M.P.",
                "country": "India",
                "pincode": 413431,
                "phoneNumber": 213123131,
                "createdAt": "2025-10-05T11:18:09.372Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:31:58.826Z",
        "__v": 0
    },
    {
        "_id": "68e4cf3ffae36689f97c1717",
        "payStatus": "paid",
        "orderId": "pay_RQW7b9cj3JWPUd",
        "paymentId": "order_RQW7PeVf5DeyGj",
        "signature": "4f6b1a31cbdf8c0d0d2f63653ce61ce046c8c63bbe7e6eec0ace0fef30ab0eef",
        "amount": 23596,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e0da2e6c26793948735c79"
            },
            {
                "productId": "68d81cbd2f66072eb5b0110a",
                "title": "Techno",
                "price": 16398,
                "quantity": 2,
                "imgSrc": "https://www.designinfo.in/wp-content/uploads/2022/09/Tecno-Spark-10C-Magic-Skin-Orange-128-GB-8-GB-RAM-2-485x485-optimized.webp",
                "_id": "68e0da2f6c26793948735c82"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e253f14155bdc9d54a0bbf",
                "userId": "68dfd244243bfd005ef55eed",
                "fullName": "Hemendra Chouhan",
                "address": "New Road",
                "city": "Guna",
                "state": "M.P.",
                "country": "India",
                "pincode": 413431,
                "phoneNumber": 213123131,
                "createdAt": "2025-10-05T11:18:09.372Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:28:47.928Z",
        "__v": 0
    }
]
   */
};

// // // Ending of userSpecificOrderFunc for the order confirmation;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of allUsersOrderFunc for the order confirmation;

export const allUsersOrderFunc = async (req, res) => {
  let allOrders = await Payment.find().sort({ orderDate: -1 });

  console.log("userSpecificOrder => ", allOrders);
  res.json(allOrders);
  // // // Open the POSTMAN select the GET request then enter the url as (http://localhost:8000/api/payment/orders) then hit the send btn;
  // // // Therefore, we will get all users payment details with items record of all user;
  /**
   * [
    {
        "_id": "68e4d1b17f6d9c9f0a5f63a0",
        "payStatus": "paid",
        "orderId": "pay_RQWIj4ISNDYBp5",
        "paymentId": "order_RQWI4cFPimadec",
        "signature": "588ff4cddb9745a57eefb704eb145dadb13b33394ea2ab59170c3b132fb33651",
        "amount": 35497,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e27b754155bdc9d54a0eba"
            },
            {
                "productId": "68d62fb203bf4115833b5fd1",
                "title": "OPPO K13 5G",
                "price": 16499,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/419ICBzEMVL.jpg",
                "_id": "68e3a8d8c2f7fe38ce6ecc7f"
            },
            {
                "productId": "68d6329603bf4115833b5ff2",
                "title": "iQOO Neo",
                "price": 2800,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/610NUM9jlxL._SL1200_.jpg",
                "_id": "68e4d1657f6d9c9f0a5f6373"
            },
            {
                "productId": "68d6329c03bf4115833b5ff4",
                "title": "Realme NARZO",
                "price": 9000,
                "quantity": 1,
                "imgSrc": "https://m.media-amazon.com/images/I/71Vjn1DfArL._SL1500_.jpg",
                "_id": "68e4d1677f6d9c9f0a5f6383"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e2625c4155bdc9d54a0c98",
                "userId": "68dfd1f3243bfd005ef55eb1",
                "fullName": "Mohd. Umar Khan",
                "address": "adfasd",
                "city": "Guna",
                "state": "Madhya Pradesh",
                "country": "India",
                "pincode": 473001,
                "phoneNumber": 31231312,
                "createdAt": "2025-10-05T12:19:40.548Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:39:13.910Z",
        "__v": 0
    },
    {
        "_id": "68e4cffefae36689f97c1723",
        "payStatus": "paid",
        "orderId": "pay_RQWB507oI5UiMJ",
        "paymentId": "order_RQWAWE5TO6jqeT",
        "signature": "096370dad11b354d61ca8bb4b131267eba9f5c75604fd57fa94da508284f7305",
        "amount": 23596,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e0da2e6c26793948735c79"
            },
            {
                "productId": "68d81cbd2f66072eb5b0110a",
                "title": "Techno",
                "price": 16398,
                "quantity": 2,
                "imgSrc": "https://www.designinfo.in/wp-content/uploads/2022/09/Tecno-Spark-10C-Magic-Skin-Orange-128-GB-8-GB-RAM-2-485x485-optimized.webp",
                "_id": "68e0da2f6c26793948735c82"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e253f14155bdc9d54a0bbf",
                "userId": "68dfd244243bfd005ef55eed",
                "fullName": "Hemendra Chouhan",
                "address": "New Road",
                "city": "Guna",
                "state": "M.P.",
                "country": "India",
                "pincode": 413431,
                "phoneNumber": 213123131,
                "createdAt": "2025-10-05T11:18:09.372Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:31:58.826Z",
        "__v": 0
    },
    {
        "_id": "68e4cf3ffae36689f97c1717",
        "payStatus": "paid",
        "orderId": "pay_RQW7b9cj3JWPUd",
        "paymentId": "order_RQW7PeVf5DeyGj",
        "signature": "4f6b1a31cbdf8c0d0d2f63653ce61ce046c8c63bbe7e6eec0ace0fef30ab0eef",
        "amount": 23596,
        "orderItems": [
            {
                "productId": "68d8da2e51c019c74cca40c1",
                "title": "Jio SmartPhone",
                "price": 7198,
                "quantity": 2,
                "imgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbI3rncvHI1iAIvbEO6WwIbYh0fhhnxwj6D3eMyxZh6G3KdCeTLa3rBEzXn--Rv7zO3H8Z54SoyUhqwQgqwd0Cwub4PWyQq9yuaAvRidQR2RyI7LXXRaptSQ",
                "_id": "68e0da2e6c26793948735c79"
            },
            {
                "productId": "68d81cbd2f66072eb5b0110a",
                "title": "Techno",
                "price": 16398,
                "quantity": 2,
                "imgSrc": "https://www.designinfo.in/wp-content/uploads/2022/09/Tecno-Spark-10C-Magic-Skin-Orange-128-GB-8-GB-RAM-2-485x485-optimized.webp",
                "_id": "68e0da2f6c26793948735c82"
            }
        ],
        "userShipping": {
            "message": "Fetching specific user address",
            "success": true,
            "data": {
                "_id": "68e253f14155bdc9d54a0bbf",
                "userId": "68dfd244243bfd005ef55eed",
                "fullName": "Hemendra Chouhan",
                "address": "New Road",
                "city": "Guna",
                "state": "M.P.",
                "country": "India",
                "pincode": 413431,
                "phoneNumber": 213123131,
                "createdAt": "2025-10-05T11:18:09.372Z",
                "__v": 0
            }
        },
        "orderDate": "2025-10-07T08:28:47.928Z",
        "__v": 0
    }
]
   */
};

// // // Ending of allUsersOrderFunc for the order confirmation;

///////***********************************************************************///////
///////***********************************************************************///////
