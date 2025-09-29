import React from "react";
import { useParams } from "react-router-dom";

const SearchProducts = () => {
  // // // Using useParams hook to grab the dynamic id i.e.,("/product/search/:term") espically the term that is connected with the help of Navbar search tag using navigate(`/product/search/${searchTerm}`);
  const { term } = useParams();

  console.log(useParams());

  return (
    <>
      <center>
        <h1>Welcome to the Search Product Page</h1>
        <h2>Getting search term on URL as = {term}.</h2>
      </center>
    </>
  );
};

export default SearchProducts;
