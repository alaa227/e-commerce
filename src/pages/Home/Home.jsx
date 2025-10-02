import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Discover Luxury Accessories</h1>
          <p className={styles.subtitle}>Elegance. Simplicity. Timeless.</p>
          <Link to="/products" className={styles.ctaBtn}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.feature}>
              <i className="bi bi-truck"></i>
              <p>Free Shipping</p>
            </div>
            <div className={styles.feature}>
              <i className="bi bi-gem"></i>
              <p>Luxury Quality</p>
            </div>
            <div className={styles.feature}>
              <i className="bi bi-palette"></i>
              <p>Unique Designs</p>
            </div>
            <div className={styles.feature}>
              <i className="bi bi-shield-lock"></i>
              <p>Secure Payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className={styles.sale}>
        <div className="container text-center">
          <h2>Special Sale</h2>
          <p>Up to 30% off on selected items</p>
          <Link to="/products" className={styles.saleBtn}>
            Explore Sale
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className={styles.about}>
        <div className="container text-center">
          <h2>Why Alaa Jewelry?</h2>
          <p>
            We bring you carefully crafted accessories that combine modern
            elegance with timeless beauty.
          </p>
          <Link to="/about" className={styles.learnMoreBtn}>
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
