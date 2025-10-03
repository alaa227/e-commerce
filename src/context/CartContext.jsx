// src/context/CartContext.jsx
import { createContext, useReducer, useContext, useEffect } from "react";
import { useProducts } from "./ProductsContext";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload; // تحميل من localStorage

    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case "DECREASE_CART_QTY":
      return state
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { dispatch: productsDispatch } = useProducts();
  const { currentUser } = useAuth();

  const [cart, dispatch] = useReducer(cartReducer, []);
const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  // 🟢 تحميل الكارت من localStorage عند دخول يوزر
  useEffect(() => {
    if (!currentUser) {
      dispatch({ type: "SET_CART", payload: [] });
      return;
    }
    try {
      const raw = localStorage.getItem(`cart_${currentUser.id}`);
      dispatch({ type: "SET_CART", payload: raw ? JSON.parse(raw) : [] });
      
    } catch {
      dispatch({ type: "SET_CART", payload: [] });
    }
  }, [currentUser]);

  // 🟢 حفظ الكارت في localStorage كل ما يتغير
  useEffect(() => {
    if (!currentUser) return;
    try {
      localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cart));
    } catch {}
  }, [cart, currentUser]);

  // 🟢 العمليات
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    productsDispatch({
      type: "DECREASE_STOCK",
      payload: { id: product.id, qty: 1 },
    });
  };

  const decreaseCartQty = (product) => {
    dispatch({ type: "DECREASE_CART_QTY", payload: { id: product.id } });
    productsDispatch({
      type: "INCREASE_STOCK",
      payload: { id: product.id, qty: 1 },
    });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });
    productsDispatch({
      type: "INCREASE_STOCK",
      payload: { id: product.id, qty: product.quantity },
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseCartQty, removeFromCart, count }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
