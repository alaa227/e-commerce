import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from './pages/Cart/Cart';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import OrderDelivery from "./pages/OrderDelivery/OrderDelivery";
function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order-delivery" element={<OrderDelivery />} />
          <Route
            path="*"
            element={<div style={{ padding: 20 }}>404 — الصفحة مش موجودة</div>}
          />
        </Route>
      </Routes>
       </HashRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App
