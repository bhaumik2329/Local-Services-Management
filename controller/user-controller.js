const { genSaltSync } = require("bcrypt");
const bcrypt = require("bcrypt");
const UserModel = require("../model/user-model");

//add [post]
module.exports.addUser = function (req, res) {
  let firstName = req.body.firstName;
  let email = req.body.email;
  let password = req.body.password;
  let address = req.body.address;
  let stateName = req.body.stateName;
  let cityName = req.body.cityName;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;
  //encrypt

  let encPassword = bcrypt.hashSync(password, 10);

  let role = "623b5ff8b973ab8001a1e747"

  let user = new UserModel({
    firstName: firstName,
    email: email,
    password: encPassword,
    role: role,
    address: address,
    stateName: stateName,
    cityName: cityName,
    pinCode: pinCode,
    contactNum: contactNum,
  });


  if (email) {

    UserModel.find({ email }, function (err, data) {
      if (err) {
        console.log("error in checking")
      } else {
        console.log("Checking done")
        if ((data.length < 1)) {

          user.save(function (err, success) {
            if (err) {
              console.log(err);
              //sendMailToDev(err)
              res.json({ msg: "SWR", status: -1, data: req.body });
            } else {
              res.json({ msg: "user added", status: 200, data: success });
            }
          });
        }
        else {
          res.json({ msg: "email already exists", status: 200, data: data });
        }


      }
    });
  }


}













//list
module.exports.getAllUsers = function (req, res) {
  UserModel.find()
    .populate("role")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body }); // -1 [302 404 500]
      } else {
        res.json({ msg: "user retrived...", status: 200, data: data }); //status:200 is http status code
      }
    });
};


//get single user
module.exports.getUser = function (req, res) {
  let userId = req.params.userId;
  UserModel.findById({ _id: userId }, function (err, user) {

    if (err) {
      res.json({ msg: "something went wrong", status: -1, data: err });
    } else {
      res.json({ msg: "user retrived...", status: 200, data: user });
    }
  });
};




//update

module.exports.updateUser = function (req, res) {
  let userId = req.body.userId;
  let firstName = req.body.firstName;
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;
  let address = req.body.address;
  let stateName = req.body.stateName;
  let cityName = req.body.cityName;
  let pinCode = req.body.pinCode;
  let contactNum = req.body.contactNum;


  //encrypt

  // let encPassword = bcrypt.hashSync(password, 10);
  UserModel.updateMany(
    { _id: userId },
    {
      firstName: firstName, email: email, password: password, role: role, address: address, stateName: stateName, cityName: cityName,
      pinCode: pinCode, contactNum, contactNum
    },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};

module.exports.updatePassword = function (req, res) {

  let userId = req.body.userId;
  let password = req.body.password;

  //encrypt
  let encPassword = bcrypt.hashSync(password, 10);


  UserModel.updateOne(
    { _id: userId },
    { password: encPassword },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};

//delete
module.exports.deleteUser = function (req, res) {
  //params userid
  let userId = req.params.userId;

  UserModel.deleteOne({ _id: userId }, function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "deleted...", status: 200, data: data });
    }
  });
};

//login

module.exports.login = function (req, res) {
  let param_email = req.body.email;
  let param_password = req.body.password;

  let isCorrect = false;

  UserModel.findOne({ email: param_email }, function (err, data) {
    if (data) {
      let ans = bcrypt.compareSync(param_password, data.password);
      if (ans == true) {
        isCorrect = true;
      }
    }

    if (isCorrect == false) {
      res.json({ msg: "Invalid credentials", data: req.body, status: -1 }); //-1 [302 404 500]
    } else {
      res.json({ msg: "Login...", data: data, status: 200 }); //http status code
    }
  });
}


