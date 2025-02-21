const express = require("express");
const db = require("./config/db"); // Ensure your DB connection file works as expected.
const route = require("./routes/userRoutes");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

const LocalAuth = require("./middleware/LocalAuth");
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Enable CORS for React
app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

LocalAuth(passport); // Initialize local strategy

app.use(express.urlencoded({ extended: true }));
app.use("/user", route);

app.listen(7857, () => {
    console.log("Server listening on port 7857");
});
