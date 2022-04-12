const ServiceModel = require("../model/service-model");

//add
module.exports.addService = function (req, res) {
  let serviceName = req.body.serviceName;

  let service = new ServiceModel({
    serviceName: serviceName,
  });

  service.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "service added", status: 200, data: success });
    }
  });
};

//list
module.exports.getAllServices = function (res, res) {
  ServiceModel.find(function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "services retrived", status: 200, data: data });
    }
  });
};

//get single service

module.exports.getService = function (req, res) {
  let serviceId = req.params.serviceId;
  ServiceModel.findById({ _id: serviceId }, function (err, user) {

    if (err) {
      res.json({ msg: "something went wrong", status: -1, data: err });
    } else {
      res.json({ msg: "user retrived...", status: 200, data: user });
    }
  });
};


//delete

module.exports.deleteService = function (req, res) {
  let serviceId = req.params.serviceId;

  ServiceModel.deleteOne({ _id: serviceId }, function (err, data) {
    if (err) {
      res.json({ msg: "SWR", status: -1, data: err });
    } else {
      res.json({ msg: "deleted successfully", status: 200, data: data });
    }
  });
};

//update
module.exports.updateService = function (req, res) {
  let serviceName = req.body.serviceName;
  let serviceId = req.body.serviceId;

  ServiceModel.updateOne(
    { _id: serviceId },
    { serviceName: serviceName },
    function (err, data) {
      if (err) {
        res.json({ msg: "SWR", status: -1, data: err });
      } else {
        res.json({ msg: "updated successfully...", status: 200, data: data });
      }
    }
  );
};
