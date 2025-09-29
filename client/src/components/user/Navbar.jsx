import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handlerOnSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm); // // Getting search input value on Browser's Console;
    setSearchTerm(" ");
    // // // After entering the input value on search tag redirecting the user on SearchProducts.jsx page and getting that serach term on the Browser's URL also;
    navigate(`/product/search/${searchTerm}`);
  };

  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link
            to={"/"}
            className="left"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>Apna Store</h3>
          </Link>
          <form className="search_bar" onSubmit={handlerOnSearchSubmit}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search Products...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </form>
          <div className="right">
            <button className="btn btn-warning mx-2">cart</button>
            <button className="btn btn-warning mx-2">profile</button>
            <button className="btn btn-warning mx-2">login</button>
            <button className="btn btn-warning mx-2">register</button>
            <button className="btn btn-warning mx-2">logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
