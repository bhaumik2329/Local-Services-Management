const fs = require("fs")


function signup(req,res)
{
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

<<<<<<< HEAD
function login(req,res){
=======
function login (req,res){
>>>>>>> 58d381678cef30852400229855829e1def613e83
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}

<<<<<<< HEAD
function saveUser(req,res){
    console.log(req.body)

    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })
    
}

module.exports.login=login
module.exports.signup=signup
module.exports.saveuser=saveUser
=======
module.exports.login=login
module.exports.signup=signup
>>>>>>> 58d381678cef30852400229855829e1def613e83
