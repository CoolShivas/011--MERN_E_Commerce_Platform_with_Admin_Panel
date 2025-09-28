import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ShowProducts = () => {
  const { pasApiProducts } = useContext(AppContext);
  // console.log(pasApiProducts[0].title); // // Getting data on Browser's Console;
  return (
    <>
      {pasApiProducts?.map((cur) => {
        return (
          <div key={cur._id}>
            <h1>{cur.title}</h1>
          </div>
        );
      })}
    </>
  );
};

export default ShowProducts;
