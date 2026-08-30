const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utilities/wrapAsync.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/sweetspot";

main()
  .then(() => console.log("connection established successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsMate);

const port = 8080;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

app.get("/", (req, res) => {
  res.send("home root working boss");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "Beautiful Mountain View",
    description: "Property with an excellent view of the mountain ranges ",
    price: 1200,
    location: "Himachal Pradesh",
    country: "India",
  });
  await sampleListing.save();
  res.send("testing successful");
});

//Main route - displays all listings
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.get("/listings/new", (req, res) => {
  // res.send("new listing page is successfully opened");
  res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const listing = await Listing.findById(id);
  console.log(listing);
  // res.send("let me see if working");
  res.render("listings/show.ejs", { listing });
});

app.post(
  "/listings",
  wrapAsync(async (req, res, next) => {
    // const { title, description, image, price, location, country } = req.body;
    const listing = req.body.listing;
    console.log(listing);
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  console.log(listing);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

app.use((err, req, res, next) => {
  res.send("something went wrong");
});
