import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import bodyParser from "body-parser";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import { config } from "dotenv";
import addressRouter from "./Routes/address.js";
import cors from "cors";
import paymentRouter from "./Routes/payment.js";

const server = express();

server.use(bodyParser.json());

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Set-Up of cors. It will help the axios/fetch method to connected with Back-End from Front-End;

server.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// // // Ending of Set-Up of cors. It will help the axios/fetch method to connected with Back-End from Front-End;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middleware use method to connect with User Routes endpoint;

server.use("/api/user", userRouter);
server.use("/api/product", productRouter);
server.use("/api/cart", cartRouter);
server.use("/api/shipping", addressRouter);
server.use("/api/payment", paymentRouter);

// // // Ending of middleware use method to connect with User Routes endpoint;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Set-Up of dotenv;

config({ path: ".env" });

// // // Ending of Set-Up of dotenv;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

mongoose
  .connect(process.env.MONGO_URI, { dbName: "MERN_EComm_ADMiN_Panel" })
  .then(() => console.log("MongoDB Connected Successfully...!"))
  .catch((err) => console.log(err));

// // // Ending of connection MongoDB to ExpressJS through Mongoose;

///////***********************************************************************///////
///////***********************************************************************///////

const PORT = process.env.PORT || 3000; // // Also, providing the fallback PORT number 3000;

server.listen(PORT, () => {
  console.log(`Server is running at Port :-) ${PORT}`);
});
