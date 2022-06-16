const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  module: {
    type: Schema.Types.ObjectId,
    ref: "Module",
  },
  year: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: Schema.Types.ObjectId,
    ref: "TimeModel",
  },
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue",
  },
  lecturer: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
  },
});

module.exports = mongoose.model("Schedule", scheduleSchema);
