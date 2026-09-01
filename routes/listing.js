const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utilities/wrapAsync");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utilities/ExpressError");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const listing = await Listing.findById(id).populate("reviews");
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  }),
);

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const listing = req.body.listing;
    console.log(listing);
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/edit.ejs", { listing });
  }),
);

router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  }),
);

module.exports = router;
