const CustomerAddressModel = require("../model/customeraddress-model");

//add

module.exports.addCustomerAddress = function (req, res) {
  let user = req.body.user;
  let address = req.body.address;
  let stateId = req.body.stateId;
  let cityId = req.body.cityId;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;

  let customeraddress = CustomerAddressModel({
    user: user,
    address: address,
    stateId: stateId,
    cityId: cityId,
    pinCode: pinCode,
    contactNum: contactNum,
  });

  customeraddress.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({
        msg: "customeraddress added....",
        status: 200,
        data: success,
      });
    }
  });
};

//list

module.exports.getAllCustomerAddress = function (req, res) {
  CustomerAddressModel.find()
    .populate("user")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "customeraddress retrived....",
          status: 200,
          data: data,
        });
      }
    });
};

//delete

module.exports.deleteCustomerAddress = function (req, res) {
  let customerAddressId = req.params.customerAddressId;

  CustomerAddressModel.deleteOne(
    { _id: customerAddressId },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "customeraddress deleted....",
          status: 200,
          data: data,
        });
      }
    }
  );
};

//update

module.exports.updateCustomerAddress = function (req, res) {
  let customerAddressId = req.body.customerAddressId;
  let user = req.body.user;
  let address = req.body.address;
  let stateId = req.body.stateId;
  let cityId = req.body.cityId;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;

  CustomerAddressModel.updateMany(
    { _id: customerAddressId },
    {
      user: user,
      address: address,
      stateId: stateId,
      cityId: cityId,
      pinCode: pinCode,
      contactNum: contactNum,
    },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "customeraddress updated....",
          status: 200,
          data: data,
        });
      }
    }
  );
};
