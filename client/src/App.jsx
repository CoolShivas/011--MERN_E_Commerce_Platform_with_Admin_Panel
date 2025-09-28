import React, { useContext } from "react";
import AppContext from "./context/AppContext";

const App = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <center>Welcome to the Home Page.</center>
      <h1>{data}</h1>
    </>
  );
};

export default App;
