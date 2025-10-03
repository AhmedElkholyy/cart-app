import "./App.css";

import AppNavbar from "./components/AppNavbar";
import { Routes, Route } from "react-router";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
