const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Databse Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });
  const Pincode = require ("./model/pincode.js");
// const pincode = require("./model/pincode.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Crud Node Express" });
// });

app.get("/", async (req, res) => {
  try {
    console.log("api hit", req.query.pincode,Pincode)
    const pin = await Pincode.find({ "Pincode": req.query.pincode })
    console.log(pin)
    res.json(pin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

