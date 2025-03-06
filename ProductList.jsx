import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css"; // ✅ CSS Import

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((prod) => (
            <li key={prod._id} className="product-item">
              <h3>{prod.name}</h3>
              <p><strong>Category:</strong> {prod.category}</p>
              <p><strong>Subcategory:</strong> {prod.subcategory}</p>
              <p><strong>Extra Category:</strong> {prod.extraCategory}</p>
            </li>
          ))
        ) : (
          <li className="no-products">No products found</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
