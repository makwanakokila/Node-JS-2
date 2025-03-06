const mongoose = require("mongoose");

const extraCategorySchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("ExtraCategory", extraCategorySchema);
