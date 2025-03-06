const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  extraCategory: { type: mongoose.Schema.Types.ObjectId, ref: "ExtraCategory" },
});

module.exports = mongoose.model("Product", productSchema);
