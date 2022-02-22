const mongoose = require("mongoose");

//sch

let ServiceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Number,
    default: 1,
  },
});

//model
const ServiceModel = mongoose.model("service", ServiceSchema);
module.exports = ServiceModel;
