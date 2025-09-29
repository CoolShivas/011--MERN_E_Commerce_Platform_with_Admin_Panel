import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const SearchProducts = () => {
  // // // Using useParams hook to grab the dynamic id i.e.,("/product/search/:term") espically the term that is connected with the help of Navbar search tag using navigate(`/product/search/${searchTerm}`);
  const { term } = useParams();

  // console.log(useParams()); // // Getting data;

  // // // Getting all the products that we are getting from Back-End API;
  const { pasApiProducts } = useContext(AppContext);

  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    // // // Filtering out the item that the user enter on the search tag with all products title;
    setSearchProduct(
      pasApiProducts.filter((searchTagItem) => {
        return searchTagItem?.title
          ?.toLowerCase()
          .includes(term?.toLowerCase());
      })
    );
  }, [term, pasApiProducts]);

  // console.log(searchProduct); // // Getting data;

  return (
    <>
      <div className="container text-center">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row container d-flex justify-content-center align-items-center my-5">
            {searchProduct?.map((cur) => {
              return (
                <div
                  key={cur?._id}
                  className="my-3 col-md-4 d-flex justify-content-center align-items-center"
                >
                  <div
                    className="card bg-dark text-light text-center"
                    style={{ width: "18rem" }}
                  >
                    <Link
                      to={`/product/${cur?._id}`}
                      className="d-flex justify-content-center align-items-center p-3"
                    >
                      <img
                        src={cur?.imgSrc}
                        alt="image not found"
                        className="card-img-top"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "10px",
                          border: "2px solid yellow",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{cur?.title}</h5>
                      <div className="my-3">
                        <button className="btn btn-primary mx-3">
                          {cur?.price} {"₹"}
                        </button>
                        <button className="btn btn-warning">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
