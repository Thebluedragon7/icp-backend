const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeModelSchema = new Schema({
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TimeModel", timeModelSchema);
