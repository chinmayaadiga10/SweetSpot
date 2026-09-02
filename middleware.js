module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You Must Be Logged In to Create A Listing");
    return res.redirect("/login");
  }
  next();
};
