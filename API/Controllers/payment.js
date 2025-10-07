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

// // // Starting of verifyPaymentFunc for the payment confirmation;

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

// // // Ending of verifyPaymentFunc for the payment confirmation;

///////***********************************************************************///////
///////***********************************************************************///////
