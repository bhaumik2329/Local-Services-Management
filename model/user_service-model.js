const mongoose = require("mongoose");

//sch

let userServiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,

  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
    required: true,

  },
  catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "catagory",
    required: true,

  },
  vCatagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vCatagory",
    required: true,

  },
});

let UserServiceModel = mongoose.model("userService", userServiceSchema);
module.exports = UserServiceModel;
