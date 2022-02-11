const fs = require("fs")


function signup(req,res)
{
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function login (req,res){
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}

module.exports.login=login
module.exports.signup=signup