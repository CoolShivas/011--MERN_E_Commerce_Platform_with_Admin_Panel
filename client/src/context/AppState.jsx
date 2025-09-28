import React from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  // // // Passing random data on client side for testing;
  const data = "Getting the data from Context API.";
  return (
    <AppContext.Provider value={{ data }}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
