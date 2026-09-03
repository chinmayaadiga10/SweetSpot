const mongoose = require("mongoose");
const initialData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/sweetspot";

main()
  .then(() => console.log("connection established successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany();
  initialData.data = initialData.data.map((obj) => ({
    ...obj,
    owner: "6a99309f790f21c727c5a8f8",
  }));
  await Listing.insertMany(initialData.data);
  console.log("database was initialized");
};

initDB();
