import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const RelatedProducts = ({ pasCategory }) => {
  // // // Getting all the products that we are getting from Back-End API;
  const { pasApiProducts } = useContext(AppContext);
  console.log(pasApiProducts); // // Getting data on Browser's Console from Context API;

  // // // Comparing the pasApiProducts i.e., (whole product data) with the pasCategory i.e.,(with the click product data) using filter method to get the same products;
  const sameCat = pasApiProducts.filter((curElem) => {
    return curElem.category === pasCategory;
  });

  console.log(sameCat); // // Getting data same category data on Browser's Console;

  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
