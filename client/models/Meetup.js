
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
  email: { type: String, required: true },
  Rec: { type: String, required: true },
  category: { type: String, required: true }
});

const Meetup = mongoose.model("Meetup", MeetupSchema);

module.exports = Meetup;