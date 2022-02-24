const mongoose = require("mongoose");

//sch

let userServiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
  },
  catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "catagory",
  },
  vCatagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vCatagory",
  },
});

let UserServiceModel = mongoose.model("userService", userServiceSchema);
module.exports = UserServiceModel;
