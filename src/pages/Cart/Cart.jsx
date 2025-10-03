import React from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import styles from "./CartPage.module.css";
import cn from "classnames";

// Bootstrap icons (make sure you have bootstrap-icons installed)
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CartPage() {
  const { currentUser } = useAuth();
  const { cart, addToCart, decreaseCartQty, removeFromCart } = useCart();

  // Not logged in
  if (!currentUser) {
    console.warn("CartPage: user not logged in");
    return (
      <div className={cn("container text-center mt-5", styles.message)}>
        <h3>You must log in to view your cart 🛒</h3>
      </div>
    );
  }

  // Cart is empty
  if (!cart || cart.length === 0) {
    console.warn("CartPage: cart is empty");
    return (
      <div className={cn("container text-center mt-5", styles.message)}>
        <h3>Your cart is currently empty 😢</h3>
      </div>
    );
  }

  // Cart has items
  console.log("CartPage: cart items", cart);

  return (
    <div className={cn("container mt-5", styles.cartPage)}>
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      <div className={cn("row justify-content-center", styles.cartList)}>
        <div className="col-12 col-md-10">
          <ul className={cn("list-group", styles.cartUl)}>
            {cart.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "list-group-item d-flex align-items-center mb-3 shadow-sm",
                  styles.cartItem
                )}
                style={{
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartImg}
                  style={{
                    width: 70,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border)",
                    marginRight: 16,
                  }}
                />
                <div className="flex-grow-1">
                  <h5 className={cn("mb-1", styles.productName)}>
                    {item.name}
                  </h5>
                  <div className={cn("text-muted", styles.productPrice)}>
                    {item.price} {item.currency}
                  </div>
                  <div
                    className={cn(
                      "d-flex align-items-center mt-2",
                      styles.qtyControls
                    )}
                  >
                    <button
                      className={cn("btn btn-sm  me-2")}
                      onClick={() => {
                        addToCart(item);
                        console.log("Increased qty for", item.name);
                      }}
                      title="Increase quantity"
                    >
                      <i className="bi bi-plus-circle"></i>
                    </button>
                    <span className={styles.qtyNum}>{item.quantity}</span>
                    <button
                      className={cn("btn btn-sm", styles.noBorderBtn, "ms-2")}
                      onClick={() => {
                        decreaseCartQty(item);
                        console.log("Decreased qty for", item.name);
                      }}
                      title="Decrease quantity"
                      disabled={item.quantity <= 1}
                    >
                      <i className="bi bi-dash-circle"></i>
                    </button>
                  </div>
                </div>
                <button
                  className={cn("btn btn-sm  ms-3")}
                  onClick={() => {
                    removeFromCart(item);
                    console.error("Removed from cart:", item.name);
                  }}
                  title="Remove from cart"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Price summary */}
      <div className="text-center mt-4">
        <h4>
          Total:{" "}
          <span style={{ color: "var(--color-accent)" }}>
            {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}{" "}
            EGP
          </span>
        </h4>
      </div>
    </div>
  );
}
