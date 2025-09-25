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

// // // Starting of Get All Products function;

export const getAllProductFunc = async (req, res) => {
  try {
    let getAllProducts = await Product.find().sort({ createdAt: -1 });

    console.log("Fetch all the products successfully..!", getAllProducts);
    res.json({
      message: "Fetch all the products successfully..!",
      success: true,
      data: getAllProducts,
    });
  } catch (error) {
    console.log("Error occurs in get all product => ", error.message);
    res.json({ message: error.message, success: false });
  }
};

// // // Ending of Get All Products function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Get Product By ID function;

export const getProductByIdFunc = async (req, res) => {
  const id = req.params.id;
  try {
    let getProById = await Product.findById(id);

    if (!getProById) {
      console.log("Invalid Id to get product");
      return res.json({ message: "Invalid Id", success: false });
    }

    console.log("Fetch specific product successfully..!", getProById);
    res.json({
      message: "Fetch specific product successfully..!",
      success: true,
      data: getProById,
    });
  } catch (error) {
    console.log("Error occurs in get product by id => ", error.message);
    res.json({ message: error.message, success: false });
  }
};

// // // Ending of Get Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Update Product By ID function;

export const updateProductByIdFunc = async (req, res) => {
  const id = req.params.id;
  try {
    let updateProById = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateProById) {
      console.log("Invalid Id to update product");
      return res.json({ message: "Invalid Id", success: false });
    }

    console.log("Specific product updated successfully..!", updateProById);
    res.json({
      message: "Specific product updated successfully..!",
      success: true,
      data: updateProById,
    });
  } catch (error) {
    console.log("Error occurs in update product by id => ", error.message);
    res.json({ message: error.message, success: false });
  }
};

// // // Ending of Update Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Delete Product By ID function;

export const deleteProductByIdFunc = async (req, res) => {
  const id = req.params.id;
  try {
    let deleterProById = await Product.findByIdAndDelete(id);

    if (!deleterProById) {
      console.log("Invalid Id to delete product");
      return res.json({ message: "Invalid Id", success: false });
    }

    console.log("Specific product deleted successfully..!");
    res.json({
      message: "Specific product deleted successfully..!",
      success: true,
    });
  } catch (error) {
    console.log("Error occurs in delete product by id => ", error.message);
    res.json({ message: error.message, success: false });
  }
};

// // // Ending of Delete Product By ID function;

///////***********************************************************************///////
///////***********************************************************************///////
