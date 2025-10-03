import React, { useState } from "react";
import styles from "./OrderDelivery.module.css";
import { useCart } from "../../context/CartContext";
import cn from "classnames";

export default function OrderDelivery() {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Simple validation
  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^01[0-9]{9}$/.test(form.phone))
      errs.phone = "Valid Egyptian phone required";
    if (!form.address.trim()) errs.address = "Address is required";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className={cn("container", styles.confirmBox)}>
        <div className={styles.orderCard}>
          <h2 className={styles.title}>Order Placed!</h2>
          <p className={styles.subtitle}>
            Thank you, <span className={styles.accent}>{form.name}</span>.<br />
            Your order will be delivered to:
          </p>
          <div className={styles.infoBox}>
            <div>
              <strong>Phone:</strong> {form.phone}
            </div>
            <div>
              <strong>Address:</strong> {form.address}
            </div>
          </div>
          <div className={styles.cartSummary}>
            <h5>Order Summary:</h5>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} — {item.price * item.quantity}{" "}
                  {item.currency}
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              Total:{" "}
              <span style={{ color: "var(--color-accent)" }}>
                {cart.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}{" "}
                EGP
              </span>
            </div>
          </div>
          <div className={styles.deliveryNote}>
            <i
              className="bi bi-truck"
              style={{ color: "var(--color-accent)", fontSize: 24 }}
            ></i>
            <span>
              {" "}
              Your order will be delivered and you can pay cash on delivery.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("container", styles.page)}>
      <div className={cn("row justify-content-center")}>
        <div className={cn("col-12 col-md-8 col-lg-6")}>
          <div className={styles.formCard}>
            <h2 className={styles.title}>Delivery Information</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  className={cn(
                    "form-control",
                    errors.name && "is-invalid",
                    styles.input
                  )}
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-foreground)",
                  }}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  type="tel"
                  className={cn(
                    "form-control",
                    errors.phone && "is-invalid",
                    styles.input
                  )}
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01xxxxxxxxx"
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-foreground)",
                  }}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className={styles.label}>
                  Address
                </label>
                <textarea
                  className={cn(
                    "form-control",
                    errors.address && "is-invalid",
                    styles.input
                  )}
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-foreground)",
                  }}
                />
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>
              <button
                type="submit"
                className={cn("btn w-100 mt-3", styles.submitBtn)}
              >
                Cash on Delivery
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
