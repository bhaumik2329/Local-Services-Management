const fs = require("fs")
const UserModel = require("../model/user-model")

// email
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bhaumik2750@gmail.com',
        pass: 'Bhau@1372'
    }
});
// email complete



function signup(req, res) {
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function login(req, res) {
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}

function saveUser(req, res) {
    console.log(req.body)

    res.json({
        msg: "done danadone....",
        status: 200,
        data: req.body
    })

}


module.exports.getUserByEmail = function (req, res) {
    let email = req.body.email;
    UserModel.find({ email: email }, function (err, user) {

        if (err) {
            res.json({ msg: "something went wrong", status: -1, data: err });
        } else {
            res.json({ msg: "user retrived...", status: 200, data: user });
        }
    });
};




module.exports.sendOtpForPassword = function (req, res) {
    let emailParam = req.body.email
    UserModel.find({ email: emailParam }, function (err, data) {
        if (err) {
            res.json({ status: -1, msg: "SMW", data: err })
        } else {

            if (data.length != 0) {
                let myotp = parseInt(Math.random() * 1000000)
                let data1 = data
                var mailOptions = {
                    from: 'bhaumik2750@gmail.com',
                    to: emailParam,
                    subject: "OTP",
                    html: `<h3>OTP:${myotp}</h3>`
                }



                transporter.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        //sendMailToDev(err)
                        res.json({ msg: "SWR", status: -1, data: req.body });
                    } else {
                        res.json({ msg: "sent otp...", status: 200, data: data, myotp, data1 });
                    }
                })



            } else {
                res.json({ status: -1, msg: "Invalid Email", data: err })
            }
        }
    })
}







module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser
