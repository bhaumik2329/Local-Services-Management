const mongoose = require("mongoose");

let feedbackSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  isActive: {
    type: Number,
    default: 1,
  },
});

const FeedbackModel = mongoose.model("feedback", feedbackSchema);
module.exports = FeedbackModel;
