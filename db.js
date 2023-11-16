const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/test";

const connectTOMongo = () => {
  mongoose.connect(mongoUri);
  console.log("hi");
};

module.exports = connectTOMongo;
