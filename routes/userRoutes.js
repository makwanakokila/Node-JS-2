const express = require("express");
const { ui, signup, getLogin, Login, getProduct, Local } = require("../controller/userController");
const passport = require("passport");

const router = express.Router();

router.post("/register", signup);
router.get("/", ui);
router.get("/login", getLogin);
router.post("/login", Login);
router.get("/product", getProduct);
router.post("/local", passport.authenticate('local'), Local);

module.exports = router;
