const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boulderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  location: {
    lat: Number,
    long: Number,
  },
  image: String,
});

module.exports = mongoose.model("Boulders", boulderSchema);
