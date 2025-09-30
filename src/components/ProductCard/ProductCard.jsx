import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">السعر: ${product.price}</p>
        <div className="mt-auto">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-primary"
          >
            تفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}
