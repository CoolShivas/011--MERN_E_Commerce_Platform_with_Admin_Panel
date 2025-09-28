import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
