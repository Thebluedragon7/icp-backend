const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  moduleCode: {
    type: String,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  lecturer: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
  },
});

module.exports = mongoose.model("Module", scheduleSchema);
