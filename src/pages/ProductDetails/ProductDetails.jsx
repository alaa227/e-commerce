import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>تفاصيل المنتج #{id}</h2>
      <p>هنا هتجي بيانات المنتج — جبيها من localStorage أو API بحسب تصميمك.</p>
    </div>
  );
}
