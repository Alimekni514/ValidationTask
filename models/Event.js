import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
