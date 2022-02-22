const CatagoryModel = require("../model/catagory-model");

//add
module.exports.addCatagory = function (req, res) {
  let description = req.body.description;
  let service = req.body.service;
  let catagoryName = req.body.catagoryName;

  let catagory = new CatagoryModel({
    description: description,
    catagoryName: catagoryName,
    service: service,
  });

  catagory.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "catagory added", status: 200, data: success });
    }
  });
};

//list

module.exports.getAllCatagories = function (req, res) {
  CatagoryModel.find()
    .populate("service")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body }); // -1 [302 404 500]
      } else {
        res.json({ msg: "catagory retrived...", status: 200, data: data }); //status:200 is http status code
      }
    });
};

//delete
module.exports.deleteCatagory = function (req, res) {
  let catagoryId = req.params.catagoryId;

  CatagoryModel.deleteOne({ _id: catagoryId }, function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "catagory deleted...", status: 200, data: data });
    }
  });
};

//update
module.exports.updateCatagory = function (req, res) {
  let catagoryId = req.body.catagoryId;
  let description = req.body.description;
  let service = req.body.service;
  let catagoryName = req.body.catagoryName;

  CatagoryModel.updateMany(
    { _id: catagoryId },
    {
      catagoryName: catagoryName,
      description: description,
      service: service,
    },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "catagory updated...", status: 200, data: data });
      }
    }
  );
};
