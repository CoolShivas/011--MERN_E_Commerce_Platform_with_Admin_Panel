import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const {
    pasApiProducts,
    setFIlteredProducts,
    fetchingLogout,
    isAuthenticate,
  } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const productFileration = (categories) => {
    setFIlteredProducts(
      pasApiProducts.filter((data) => {
        return data.category.toLowerCase() === categories.toLowerCase();
      })
    );
  };

  const priceFileration = (pricing) => {
    setFIlteredProducts(
      pasApiProducts.filter((data) => {
        return data.price >= pricing;
      })
    );
  };

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
            {/* If user is Authenticated then only going to display these Cart, Profile and Logout buttons */}
            {isAuthenticate && (
              <>
                <button className="btn btn-warning mx-2">cart</button>
                <button className="btn btn-warning mx-2">profile</button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    fetchingLogout();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </>
            )}

            {/* If user is not Authenticated then only going to display these Login and Register buttons */}

            {!isAuthenticate && (
              <>
                <Link to={"/login"} className="btn btn-light mx-2">
                  Login
                </Link>
                <Link to={"/register"} className="btn btn-info mx-2">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        {location.pathname === "/" && (
          <div className="sub_bar">
            <div
              className="items"
              onClick={() => setFIlteredProducts(pasApiProducts)}
            >
              No Filter
            </div>
            <div className="items" onClick={() => productFileration("mobile")}>
              Mobiles
            </div>
            <div className="items" onClick={() => productFileration("laptop")}>
              Laptops
            </div>
            <div className="items" onClick={() => productFileration("camera")}>
              Cameras
            </div>
            <div
              className="items"
              onClick={() => productFileration("headphone")}
            >
              Headphones
            </div>
            <div className="items" onClick={() => priceFileration(15999)}>
              15999
            </div>
            <div className="items" onClick={() => priceFileration(25999)}>
              25999
            </div>
            <div className="items" onClick={() => priceFileration(49999)}>
              49999
            </div>
            <div className="items" onClick={() => priceFileration(69999)}>
              69999
            </div>
            <div className="items" onClick={() => priceFileration(89999)}>
              89999
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
