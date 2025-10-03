import React from "react";
import styles from "./ProductCard.module.css";
import cn from "classnames";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
export default function ProductCard({ product }) {
  const { currentUser } = useAuth();
  const { addToCart } = useCart();

  // ...existing code...

  function handleAddToCart() {
    if (!currentUser) {
      alert("You must log in first to add to cart");
      return;
    }
    if (product.stock <= 0) {
      alert("Out of stock!");
      return;
    }
    addToCart(product);
    toast.success("Product added to cart!");
  }

  return (
    <div className={cn("card h-100", styles.card)}>
      <img
        src={product.image}
        alt={product.name}
        className={cn("card-img-top", styles.image)}
      />
      <div className="card-body d-flex flex-column">
        <h5 className={cn("card-title", styles.title)}>{product.name}</h5>
        <p className={cn("card-text", styles.price)}>
          {product.price} {product.currency}
        </p>
        <button
          className={cn("btn mt-auto", styles.addBtn)}
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
