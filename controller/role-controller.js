const RoleModel = require("../model/role-module");

module.exports.addRole = function (req, res) {
  //db insert role

  let role = new RoleModel({
    roleName: req.body.roleName,
  });

  role.save(function (err, success) {
    if (err) {
      console.log(err);
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({ msg: "role added", status: 200, data: success });
    }
  });
};

module.exports.getAllRoles = function (req, res) {
  RoleModel.find(function (err, roles) {
    if (err) {
      res.json({ msg: "something went wrong", status: -1, data: err });
    } else {
      res.json({ msg: "roles....", status: 200, data: roles });
    }
  });
};

module.exports.deleteRole = function (req, res) {
  let roleId = req.params.roleId;
  RoleModel.deleteOne({ _id: roleId }, function (err, data) {
    if (err) {
      res.json({ msg: "something went wrong", status: -1, data: err });
    } else {
      res.json({ msg: "removed...", status: 200, data: data });
    }
  });
};

module.exports.updateRole = function (req, res) {
  let roleId = req.body.roleId;
  let roleName = req.body.roleName;

  RoleModel.updateOne(
    { _id: roleId },
    { roleName: roleName },
    function (err, data) {
      if (err) {
        console.log(err);
        res.json({ msg: "something went wrong", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};
