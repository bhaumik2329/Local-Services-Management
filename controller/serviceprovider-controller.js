const { Mongoose } = require("mongoose");
const ServiceProviderModel = require("../model/serviceprovider-model");

//add

module.exports.addServiceProvider = function (req, res) {
  let service = req.body.service;
  let name = req.body.name;
  let address = req.body.address;
  let stateId = req.body.stateId;
  let cityId = req.body.cityId;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;
  let customerSupportNumber = req.body.customerSupportNumber;
  let feedbackEmail = req.body.feedbackEmail;

  let serviceprovider = new ServiceProviderModel({
    service: service,
    name: name,
    address: address,
    stateId: stateId,
    cityId: cityId,
    pinCode: pinCode,
    contactNum: contactNum,
    customerSupportNumber: customerSupportNumber,
    feedbackEmail: feedbackEmail,
  });

  serviceprovider.save(function (err, success) {
    if (err) {
      console.log(err);
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "serviceprovider added", status: 200, data: success });
    }
  });
};

//list

module.exports.getAllServiceProvider = function (req, res) {
  ServiceProviderModel.find()
    .populate("service")
    .exec(function (err, data) {
      if (err) {
        console.log(err);
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "serviceprovider retrived", status: 200, data: data });
      }
    });
};

//delete

module.exports.deleteServiceProvider = function (req, res) {
  let serviceProviderId = req.params.serviceProviderId;
  ServiceProviderModel.deleteOne(
    { _id: serviceProviderId },
    function (err, data) {
      if (err) {
        console.log(err);
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "serviceprovider deleted...",
          status: 200,
          data: data,
        });
      }
    }
  );
};

//update

module.exports.updateServiceProvider = function (req, res) {
  let serviceProviderId = req.body.serviceProviderId;
  let service = req.body.service;
  let name = req.body.name;
  let address = req.body.address;
  let stateId = req.body.stateId;
  let cityId = req.body.cityId;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;
  let customerSupportNumber = req.body.customerSupportNumber;
  let feedbackEmail = req.body.feedbackEmail;

  ServiceProviderModel.updateMany(
    { _id: serviceProviderId },
    {
      service: service,
      name: name,
      address: address,
      stateId: stateId,
      cityId: cityId,
      pinCode: pinCode,
      contactNum: contactNum,
      customerSupportNumber: customerSupportNumber,
      feedbackEmail: feedbackEmail,
    },
    function (err, data) {
      if (err) {
        console.log(err);
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "serviceprovider updated...",
          status: 200,
          data: data,
        });
      }
    }
  );
};
