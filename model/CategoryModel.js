const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
});

module.exports = mongoose.model("Category", categorySchema);
