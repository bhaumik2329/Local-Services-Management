const express = require("express");
const mongoose = require("mongoose");

const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role-controller");
const userController = require("./controller/user-controller");
const serviceController = require("./controller/service-controller");
const catagoryController = require("./controller/catagory-controller");
const vicecatagoryController = require("./controller/vicecatagory-controller");
const userServiceController = require("./controller/user_service-controller");
const serviceProviderController = require("./controller/serviceprovider-controller");
const customerAddressController = require("./controller/customeraddress-controller");
const feedbackController = require("./controller/feedback-controller");

const app = express();

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.write("Welcome.......");
  res.end();
});

//html
app.get("/login", sessionController.login);
app.get("/signup", sessionController.signup);
app.post("/saveuser", sessionController.saveuser);

//role
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.delete("/roles/:roleId", roleController.deleteRole);

app.put("/roles", roleController.updateRole);

//user
app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.put("/users", userController.updateUser);
app.delete("/users/:userId", userController.deleteUser);
app.post("/login", userController.login);

//service
app.post("/services", serviceController.addService);
app.get("/services", serviceController.getAllServices);
app.delete("/services/:serviceId", serviceController.deleteService);
app.put("/services", serviceController.updateService);

//catagory
app.post("/catagories", catagoryController.addCatagory);
app.get("/catagories", catagoryController.getAllCatagories);
app.delete("/catagories/:catagoryId", catagoryController.deleteCatagory);
app.put("/catagories", catagoryController.updateCatagory);

//vicecatagory
app.post("/vicecatagories", vicecatagoryController.addViceCatagory);
app.get("/vicecatagories", vicecatagoryController.getAllViceCatagories);
app.delete(
  "/vicecatagories/:vCatagoryId",
  vicecatagoryController.deleteViceCatagory
);
app.put("/vicecatagories", vicecatagoryController.updateViceCatagory);

//userservice
app.post("/userservices", userServiceController.addUserService);
app.get("/userservices", userServiceController.getAllUserServices);
app.delete(
  "/userservices/:userServiceId",
  userServiceController.deleteUserService
);
app.put("/userservices", userServiceController.updateUserService);

//serviceprovider
app.post("/serviceproviders", serviceProviderController.addServiceProvider);
app.get("/serviceproviders", serviceProviderController.getAllServiceProvider);
app.delete(
  "/serviceproviders/:serviceProviderId",
  serviceProviderController.deleteServiceProvider
);
app.put("/serviceproviders", serviceProviderController.updateServiceProvider);

//customeraddress
app.post("/customeraddresses", customerAddressController.addCustomerAddress);
app.get("/customeraddresses", customerAddressController.getAllCustomerAddress);
app.delete(
  "/customeraddresses/:customerAddressId",
  customerAddressController.deleteCustomerAddress
);
app.put("/customeraddresses", customerAddressController.updateCustomerAddress);

//feedback
app.post("/feedbacks", feedbackController.addFeedback);
app.get("/feedbacks", feedbackController.getAllFeedback);
app.delete("/feedbacks/:feedbackId", feedbackController.deleteFeedback);
app.put("/feedbacks", feedbackController.updateFeedback);

//database
mongoose.connect("mongodb://localhost:27017/localservices", function (err) {
  if (err) {
    console.log("db connection fail....");
    console.log(err);
  } else {
    console.log("db connected....");
  }
});

app.listen(3000, function () {
  console.log("server started on 3000");
});

// const calc = require("./calc") //import

// calc.addition(10,20)
// calc.multiplication(10,10)
// calc.subtraction(50,10)

// console.log("Hello");

// a=10 //number
// console.log(a)

// a="royal" //string
// console.log(a)

// function add(a,b)
// {
//     c=a+b
//     console.log("Addition=",c)
// }

// add(10,20)
