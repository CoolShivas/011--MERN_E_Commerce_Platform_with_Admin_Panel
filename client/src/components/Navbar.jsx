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
            <Link to={"/login"}>
              <button className="btn btn-light mx-2">login</button>
            </Link>
            <Link to={"/register"}>
              <button className="btn btn-info mx-2">register</button>
            </Link>
            <button className="btn btn-warning mx-2">logout</button>
          </div>
        </div>
        <div className="sub_bar">
          <div className="items">No Filter</div>
          <div className="items">Mobiles</div>
          <div className="items">Laptops</div>
          <div className="items">Cameras</div>
          <div className="items">Headphones</div>
          <div className="items">15999</div>
          <div className="items">25999</div>
          <div className="items">49999</div>
          <div className="items">69999</div>
          <div className="items">89999</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
