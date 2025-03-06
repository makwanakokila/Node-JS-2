const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const productRoutes = require("./Routes/ProductRoutes");
const categoryRoutes = require("./Routes/CategoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", productRoutes);  // ✅ Correct Prefix
app.use("/category", categoryRoutes);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
