const express = require("express")

const sessionController= require("./controller/session-controller")

const app = express()

app.get("/",function(req,res){
    res.write("Welcome.......")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)

app.listen(3000,function(){
    console.log("server started on 3000")
})







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

