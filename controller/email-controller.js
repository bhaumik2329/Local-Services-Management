var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bhaumik2750@gmail.com',
        pass: 'Bhau@1372'
    }
});

module.exports.sendEmail = function (req, res) {
    let subject = req.body.subject;
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let vCatagoryName = req.body.vCatagoryName;
    let address = req.body.address;
    let date = req.body.date;




    var mailOptions = {
        from: 'bhaumik2750@gmail.com',
        to: `bhaumikpatel2329@gmail.com,${email}`,
        subject: subject,
        html: `<h3>name:${name}</h3>  <h3>Email:${email}</h3> <p>mobile:${mobile}</p> <p>Service:${vCatagoryName}</p> <p>Date:${date}</p> <p>Address:${address}</p>`
    }



    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            //sendMailToDev(err)
            res.json({ msg: "SWR", status: -1, data: req.body });
        } else {
            res.json({ msg: "emai sent...", status: 200, data: data });
        }
    })
}