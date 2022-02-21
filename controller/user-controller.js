const bcrypt = require("bcrypt");
const UserModel = require("../model/user-model");

//add [post]
module.exports.addUser = function (req, res) {
  let firstName = req.body.firstName;
  let email = req.body.email;
  let password = req.body.password;
  //encrypt

  let encPassword = bcrypt.hashSync(password, 10);

  let role = req.body.role;

  let user = new UserModel({
    firstName: firstName,
    email: email,
    password: encPassword,
    role: role,
  });

  user.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "user added", status: 200, data: success });
    }
  });
};

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

//update

module.exports.updateUser = function (req, res) {
  let userId = req.body.userId;
  let firstName = req.body.firstName;
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;

  UserModel.updateMany(
    { _id: userId },
    { firstName: firstName, email: email, password: password, role, role },
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
};
