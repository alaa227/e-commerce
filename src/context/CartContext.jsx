// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { currentUser } = useAuth();
  const [cart, setCart] = useState([]);

  // نحمّل من localStorage بناءً على user id (simple)
  useEffect(() => {
    if (!currentUser) {
      setCart([]);
      return;
    }
    try {
      const raw = localStorage.getItem(`cart_${currentUser.id}`);
      setCart(raw ? JSON.parse(raw) : []);
    } catch {
      setCart([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    try {
      localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cart));
    } catch {}
  }, [cart, currentUser]);

  function addToCart(productId, qty = 1) {
    setCart((prev) => {
      const copy = [...prev];
      const idx = copy.findIndex((i) => i.productId === productId);
      if (idx > -1) {
        copy[idx].quantity += qty;
      } else {
        copy.push({ productId, quantity: qty });
      }
      return copy;
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  }

  const count = cart.reduce((s, i) => s + (i.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
