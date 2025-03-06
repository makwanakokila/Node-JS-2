const express = require("express");
const Category = require("../model/CategoryModel");
const SubCategory = require("../model/SubCategorymodel");
const router = express.Router();

// Add Category
router.post("/add", async (req, res) => {  // ✅ Fixed Route
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.json({ message: "Category Added", category });
  } catch (error) {
    res.status(500).json({ error: "Failed to add category" });
  }
});

// Get Categories with Subcategories
router.get("/", async (req, res) => {  // ✅ Fixed Route
  try {
    const categories = await Category.find().populate("subcategories");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

module.exports = router;
