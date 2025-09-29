import ProductDetails from "./components/product/ProductDetails";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/user/Navbar";
import SearchProducts from "./components/product/SearchProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/search/:term" element={<SearchProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
