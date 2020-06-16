
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  email: { type: String, required: true },
  Rec: { type: String, required: true },
  category: { type: String, required: true }
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

module.exports = Recommendation;