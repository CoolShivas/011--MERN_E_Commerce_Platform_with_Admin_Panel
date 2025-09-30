import ProductDetails from "./components/product/ProductDetails";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchProducts from "./components/product/SearchProducts";
import Register from "./components/user/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/search/:term" element={<SearchProducts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
