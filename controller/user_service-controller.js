const UserServiceModel = require("../model/user_service-model");

//add

module.exports.addUserService = function (req, res) {
  let user = req.body.user;
  let service = req.body.service;
  let catagory = req.body.catagory;
  let vCatagory = req.body.vCatagory;

  let userService = new UserServiceModel({
    user: user,
    service: service,
    catagory: catagory,
    vCatagory: vCatagory,
  });

  userService.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "userservice added", status: 200, data: success });
    }
  });
};

//list

module.exports.getAllUserServices = function (req, res) {
  UserServiceModel.find()
    .populate("user")
    .populate("service")
    .populate("catagory")
    .populate("vCatagory")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "userservice retrived..", status: 200, data: data });
      }
    });
};

//delete

module.exports.deleteUserService = function (req, res) {
  let userServiceId = req.params.userServiceId;

  UserServiceModel.deleteOne({ _id: userServiceId }, function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "userservice deleted...", status: 200, data: data });
    }
  });
};

//update

module.exports.updateUserService = function (req, res) {
  let userServiceId = req.body.userServiceId;
  let user = req.body.user;
  let service = req.body.service;
  let catagory = req.body.catagory;
  let vCatagory = req.body.vCatagory;

  UserServiceModel.updateMany(
    { _id: userServiceId },
    { user: user, service: service, catagory: catagory, vCatagory: vCatagory },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "userservice updated...", status: 200, data: data });
      }
    }
  );
};
