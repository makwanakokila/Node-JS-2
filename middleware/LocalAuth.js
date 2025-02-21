const userModel = require("../model/userModel");
const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        try {
            const user = await userModel.findOne({ username });
            if (!user) {
                return done(null, false, { message: "User not found" });
            }
            if (user.password !== password) {
                return done(null, false, { message: "Invalid password" });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await userModel.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};

module.exports = LocalAuth;
