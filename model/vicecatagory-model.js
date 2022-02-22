const mongoose = require("mongoose");

//sch

let VCSchema = new mongoose.Schema({
  vCatagoryName: {
    type: String,
    required: true,
  },
  servicePrice: {
    type: Number,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
  },
  catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "catagory",
  },
  isActive: {
    type: Number,
    default: 1,
  },
});

//model

const VCatagoryModel = mongoose.model("vCatagory", VCSchema);
module.exports = VCatagoryModel;
