import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_bar">
          <div className="left">
            <h3>Shiv - Store</h3>
          </div>
          <div className="search_bar">
            <input type="text" />
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
