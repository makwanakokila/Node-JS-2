const express = require("express");
const Product = require("../model/Productmodel");
const router = express.Router();

// Add Product with hierarchy
router.post("/add", async (req, res) => {  // ✅ Fixed Route
  try {
    const { name, category, subcategory, extraCategory } = req.body;
    const product = new Product({ name, category, subcategory, extraCategory });
    await product.save();
    res.json({ message: "Product Added", product });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Get Products with populated fields
router.get("/", async (req, res) => {  // ✅ Fixed Route
  try {
    const products = await Product.find()
      .populate("category")
      .populate("subcategory")
      .populate("extraCategory");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
