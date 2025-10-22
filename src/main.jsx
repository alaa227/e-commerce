// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";

// bootstrap css + js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/globals.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HashRouter>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </HashRouter>
</React.StrictMode>

);
