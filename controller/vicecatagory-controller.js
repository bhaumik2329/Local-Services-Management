const VCatagoryModel = require("../model/vicecatagory-model");

//add
module.exports.addViceCatagory = function (req, res) {
  let vCatagoryName = req.body.vCatagoryName;
  let service = req.body.service;
  let catagory = req.body.catagory;
  let servicePrice = req.body.servicePrice;

  let viceCatagory = new VCatagoryModel({
    vCatagoryName: vCatagoryName,
    servicePrice: servicePrice,
    service: service,
    catagory: catagory,
  });

  viceCatagory.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "vicecatagory added", status: 200, data: success });
    }
  });
};

//list

module.exports.getAllViceCatagories = function (req, res) {
  VCatagoryModel.find()
    .populate("service")
    .populate("catagory")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body }); // -1 [302 404 500]
      } else {
        res.json({ msg: "vicecatagory retrived...", status: 200, data: data }); //status:200 is http status code
      }
    });
};

//delete

module.exports.deleteViceCatagory = function (req, res) {
  let vCatagoryId = req.params.vCatagoryId;

  VCatagoryModel.deleteOne({ _id: vCatagoryId }, function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "vicecatagory deleted...", status: 200, data: data });
    }
  });
};

//update
module.exports.updateViceCatagory = function (req, res) {
  let vCatagoryId = req.body.vCatagoryId;
  let vCatagoryName = req.body.vCatagoryName;
  let service = req.body.service;
  let catagory = req.body.catagory;
  let servicePrice = req.body.servicePrice;
  VCatagoryModel.updateMany(
    { _id: vCatagoryId },
    {
      vCatagoryName: vCatagoryName,
      servicePrice: servicePrice,
      service: service,
      catagory: catagory,
    },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "vicecatagory updated...", status: 200, data: data });
      }
    }
  );
};
