const userModel = require("../model/userModel");

const signup = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.json({ success: true, message: "User registered successfully", user });
    } catch (err) {
        res.status(500).json({ success: false, message: "Signup failed", error: err.message });
    }
};

const ui = (req, res) => {
    res.json({ success: true, message: "User interface endpoint" });
};

const getLogin = (req, res) => {
    res.json({ success: true, message: "Login endpoint" });
};

const Login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user) {
        return res.status(401).json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    req.login(user, (err) => {
        if (err) return res.status(500).json({ success: false, message: "Login error" });
        // Session is now set by Passport. No cookie-parser needed.
        res.json({ success: true, message: "Login successful", user });
    });
};

const getProduct = (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ success: true, message: "Product page access granted" });
    } else {
        res.status(403).json({ success: false, message: "Access denied" });
    }
};

const Local = (req, res) => {
    res.json({ success: true, message: "Passport local strategy authenticated" });
};

module.exports = { ui, signup, getLogin, Login, getProduct, Local };
