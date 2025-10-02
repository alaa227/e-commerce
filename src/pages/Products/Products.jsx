import React from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <div className="container my-5">
      <h2 className={styles.heading}>Our Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
