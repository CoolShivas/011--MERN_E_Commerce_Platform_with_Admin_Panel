import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
    imgSrc: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
  },
  { strict: false }
);

export const Product = mongoose.model("Product", productSchema);
