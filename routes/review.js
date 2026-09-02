const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review");
const Listing = require("../models/listing");
const { reviewSchema } = require("../schema");
const wrapAsync = require("../utilities/wrapAsync");
const ExpressError = require("../utilities/ExpressError");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errorMessage);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("New review Saved");
    req.flash("success", "New Review Posted");
    res.redirect(`/listings/${id}`);
  }),
);

router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
