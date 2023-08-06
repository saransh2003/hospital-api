const mongoose = require("mongoose");
require("dotenv").config();

const DB = 'mongodb+srv://shivanshyadav50:NrohLn6SJwoLqmNw@cluster0.gdlafex.mongodb.net/?retryWrites=true&w=majority'

exports.connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connected successfully"))
    .catch((err) => {
      console.log("DB connection falied");
      console.log(err);
      process.exit(1);
    });
};
