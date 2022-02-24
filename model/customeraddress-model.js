const mongoose = require("mongoose");

let customerAddressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
  isDefault: {
    type: Number,
    default: 1,
  },
});

const CustomerAddressModel = mongoose.model(
  "customeraddress",
  customerAddressSchema
);
module.exports = CustomerAddressModel;
