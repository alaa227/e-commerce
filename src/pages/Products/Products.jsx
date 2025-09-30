import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const dummy = [
  { id: "1", name: "Product A", price: 10 },
  { id: "2", name: "Product B", price: 20 },
];

export default function Products() {
  return (
    <div className="row">
      {dummy.map((p) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
