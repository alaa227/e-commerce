// src/context/ProductsContext.js
import { createContext, useReducer, useContext } from "react";
import productsData from "../data/products";

const ProductsContext = createContext();

const productsReducer = (state, action) => {
  switch (action.type) {
    case "DECREASE_STOCK":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock - action.payload.qty }
          : product
      );
    case "INCREASE_STOCK":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock + action.payload.qty }
          : product
      );
    default:
      return state;
  }
};

export const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, productsData);

  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
