const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log("Connected to db");
  } catch (err) {
    console.error("error:" + err);
  }
};

module.exports = connectDB;
