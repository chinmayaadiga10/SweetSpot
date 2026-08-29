const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/sweetspot";

main()
  .then(() => console.log("connection established successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));

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
