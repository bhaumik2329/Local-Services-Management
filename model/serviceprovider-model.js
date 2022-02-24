const mongoose = require("mongoose");
require("mongoose-type-email");

let serviceProviderSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  stateId: {
    type: Number,
  },
  cityId: {
    type: Number,
  },
  pinCode: {
    type: Number,
  },
  contactNum: {
    type: Number,
  },
  customerSupportNumber: {
    type: Number,
  },
  feedbackEmail: {
    type: mongoose.SchemaTypes.Email,
    required: true,
  },
});

let ServiceProviderModel = mongoose.model(
  "serviceprovider",
  serviceProviderSchema
);
module.exports = ServiceProviderModel;
