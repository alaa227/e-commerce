import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import cn from "classnames";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const { currentUser } = useAuth();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className={cn("container text-center mt-5", styles.notFound)}>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

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
    <div className={cn("container", styles.detailsPage)}>
      <div
        className={cn(
          "row justify-content-center align-items-center",
          styles.row
        )}
      >
        <div className={cn("col-12 col-md-6", styles.imgCol)}>
          <div className={styles.imgWrapper}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImg}
            />
          </div>
        </div>
        <div className={cn("col-12 col-md-6", styles.infoCol)}>
          <div className={styles.infoBox}>
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.type}>{product.type}</div>
            <div className={styles.price}>
              {product.price}{" "}
              <span className={styles.currency}>{product.currency}</span>
            </div>
           
            <button
              className={cn("btn mt-4", styles.addBtn)}
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
