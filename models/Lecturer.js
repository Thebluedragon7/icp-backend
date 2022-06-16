const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lecturerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  modules: [
    {
      type: Schema.Types.ObjectId,
      ref: "Module",
    },
  ],
});

module.exports = mongoose.model("Lecturer", lecturerSchema);
