const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: String,
  extraCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExtraCategory" }],
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
