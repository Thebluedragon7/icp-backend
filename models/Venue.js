const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueSchema = new Schema({
  block: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Venue", venueSchema);
