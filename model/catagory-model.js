const mongoose = require("mongoose");

//sch

let CatagorySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  catagoryName: {
    type: String,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
  },
  isActive: {
    type: Number,
    default: 1,
  },
});

//model

const CatagoryModel = mongoose.model("catagory", CatagorySchema);
module.exports = CatagoryModel;
