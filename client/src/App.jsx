import ProductDetails from "./components/product/ProductDetails";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchProducts from "./components/product/SearchProducts";
import Register from "./components/user/Register";
import { ToastContainer } from "react-toastify";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from "./components/Cart";
import Address from "./components/Address";
import CheckOut from "./components/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/search/:term" element={<SearchProducts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
