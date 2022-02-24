const FeedbackModel = require("../model/feedback-model");

//add

module.exports.addFeedback = function (req, res) {
  let description = req.body.description;
  let user = req.body.user;

  let feedback = FeedbackModel({
    description: description,
    user: user,
  });

  feedback.save(function (err, success) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({
        msg: "feedback added....",
        status: 200,
        data: success,
      });
    }
  });
};

//list

module.exports.getAllFeedback = function (req, res) {
  FeedbackModel.find()
    .populate("user")
    .exec(function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "feedback retrived....",
          status: 200,
          data: data,
        });
      }
    });
};

//delete

module.exports.deleteFeedback = function (req, res) {
  let feedbackId = req.params.feedbackId;

  FeedbackModel.deleteOne({ _id: feedbackId }, function (err, data) {
    if (err) {
      //sendMailToDev(err)
      res.json({ msg: "SWR", status: -1, data: req.body });
    } else {
      res.json({
        msg: "feedback deleted....",
        status: 200,
        data: data,
      });
    }
  });
};

//update

module.exports.updateFeedback = function (req, res) {
  let feedbackId = req.body.feedbackId;
  let description = req.body.description;
  let user = req.body.user;

  FeedbackModel.updateMany(
    { _id: feedbackId },
    { description: description, user: user },
    function (err, data) {
      if (err) {
        //sendMailToDev(err)
        res.json({ msg: "SWR", status: -1, data: req.body });
      } else {
        res.json({
          msg: "feedback updated....",
          status: 200,
          data: data,
        });
      }
    }
  );
};
