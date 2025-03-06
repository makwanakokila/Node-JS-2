import { useState, useEffect } from "react";
import axios from "axios";
import './ProductTodo.css'

const API_URL = "http://localhost:5000";

function ProductTodo() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/product`)
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addProduct = () => {
    if (!name || !category) {
      alert("Please enter product name and select category");
      return;
    }

    axios.post(`${API_URL}/product/add`, { name, category })
      .then(() => {
        setProducts([...products, { name, category }]);
        setName("");
        setCategory("");
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      <h1>Product Todo</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter product name" 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
      </select>
      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.length > 0 ? (
          products.map((p, index) => (
            <li key={index}>{p.name} - {p.category}</li>
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
    </div>
  );
}

export default ProductTodo;
