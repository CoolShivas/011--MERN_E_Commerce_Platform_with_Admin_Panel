import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link
            to={"/"}
            className="left"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>Shiv - Store</h3>
          </Link>
          <div className="search_bar">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search Products...." />
          </div>
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
