import { Product } from "../Models/Product.js";

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Add Product function;

export const addProductFunc = async (req, res) => {
  const { title, description, category, price, quantity, imgSrc } = req.body;

  try {
    let createProduct = await Product.create({
      title,
      description,
      category,
      price,
      quantity,
      imgSrc,
    });

    console.log("Product added successfully....!", createProduct);
    res.json({
      message: "Product added successfully....!",
      success: true,
      data: createProduct,
    });
  } catch (error) {
    console.log("Error occurs in add product => ", error.message);
    res.json({ message: error.message, success: false });
  }
};

// // // Ending of Add Product function;

///////***********************************************************************///////
///////***********************************************************************///////
