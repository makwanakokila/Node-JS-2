import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductForm.css"; 

const ProductForm = () => {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedExtraCategory, setSelectedExtraCategory] = useState("");

  const categories = [
    { _id: "1", name: "Smartphones", subcategories: [{ _id: "11", name: "Android" }, { _id: "12", name: "iOS" }] },
    { _id: "2", name: "Accessories", subcategories: [{ _id: "21", name: "Chargers" }, { _id: "22", name: "Earphones" }] },
  ];
  const extraCategories = [
    { _id: "101", name: "Flagship" },
    { _id: "102", name: "Mid-range" },
    { _id: "103", name: "Budget" },
  ];

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setSelectedSubCategory(""); // Reset subcategory

    const selected = categories.find((cat) => cat._id === categoryId);
    if (selected) {
      setSelectedSubCategory(selected.subcategories.length > 0 ? selected.subcategories[0]._id : "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, category: selectedCategory, subcategory: selectedSubCategory, extraCategory: selectedExtraCategory };

    try {
      await axios.post("http://localhost:5000/product/add", productData);
      alert("Product Added Successfully!");
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select onChange={handleCategoryChange} value={selectedCategory} required>
          <option value="" disabled>Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>

        <select onChange={(e) => setSelectedSubCategory(e.target.value)} value={selectedSubCategory} required>
          <option value="" disabled>Select Subcategory</option>
          {categories.find((cat) => cat._id === selectedCategory)?.subcategories.map((sub) => (
            <option key={sub._id} value={sub._id}>{sub.name}</option>
          ))}
        </select>

        <select onChange={(e) => setSelectedExtraCategory(e.target.value)} value={selectedExtraCategory} required>
          <option value="" disabled>Select Extra Category</option>
          {extraCategories.map((extra) => (
            <option key={extra._id} value={extra._id}>{extra.name}</option>
          ))}
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
