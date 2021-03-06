import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./pages/Products/AllProducts";
import Product from "./pages/Product/Product";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/allCoffees" element={<AllProducts />} />
          <Route path="/products/:name" element={<Product />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
