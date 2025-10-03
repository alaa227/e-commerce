import React from "react";
import styles from "./ProductCard.module.css";
import cn from "classnames";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  const { currentUser } = useAuth();
  const { addToCart } = useCart();

  // ...existing code...

 function handleAddToCart() {
   if (!currentUser) {
     toast.error("You must log in first to add to cart");
     return;
   }
   if (product.stock <= 0) {
     toast.error("Out of stock!");
     return;
   }
   addToCart(product);
   toast.success("Product added to cart!");
 }

  return (
    <div className={cn("card h-100", styles.card)}>
      <Link
        to={`/product/${product.id}`}
        className={styles.link}
        style={{ textDecoration: "none" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className={cn("card-img-top", styles.image)}
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <Link
          to={`/product/${product.id}`}
          className={styles.link}
          style={{ textDecoration: "none" }}
        >
          <h5 className={cn("card-title", styles.title)}>{product.name}</h5>
        </Link>
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
