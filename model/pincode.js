var mongoose = require("mongoose");
var schema = new mongoose.Schema({
  Pincode: {
    type: String,
  },
  Distance: {
    type: String,
  },
});
var pincode = new mongoose.model("Pincode", schema);
module.exports = pincode;
