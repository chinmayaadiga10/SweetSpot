const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utilities/wrapAsync.js");
const ExpressError = require("./utilities/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.get("/", (req, res) => {
  res.send("home root working boss");
});

app.get(
  "/testListing",
  wrapAsync(async (req, res) => {
    let sampleListing = new Listing({
      title: "Beautiful Mountain View",
      description: "Property with an excellent view of the mountain ranges ",
      price: 1200,
      location: "Himachal Pradesh",
      country: "India",
    });
    await sampleListing.save();
    res.send("testing successful");
  }),
);

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found !"));
});

app.use((err, req, res, next) => {
  let { statusCode = 404, message = "Invalid Request !" } = err;
  res.status(statusCode).render("error.ejs", { message });
});
