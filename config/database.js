const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://divyangrnw:12345@cluster0.puduzpk.mongodb.net/Blog_Project_1"
  );
  console.log("Database Connected Successfully");
};

module.exports = db;
