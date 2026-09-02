const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utilities/wrapAsync");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", "New User was registered");
      res.redirect("/listings");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  }),
);

module.exports = router;
