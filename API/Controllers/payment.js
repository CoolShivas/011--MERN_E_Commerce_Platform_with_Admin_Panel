import dotenv from "dotenv";
import Razorpay from "razorpay";

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

// // //  Checkout controller
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
