const mongoose = require("mongoose");

const dbconn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successfull...");
  } catch (error) {
    console.log("Database connection Error...", error.message);
  }
};

module.exports = dbconn;
