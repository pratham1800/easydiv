const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL =
  "mongodb+srv://NSDEV:CLpi8sHKP9jLRWi5@cluster0.da6yn.mongodb.net/test";
// CLpi8sHKP9jLRWi5
const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Connected to mongo sucessfully");
  });
};
module.exports = connectToMongo;
