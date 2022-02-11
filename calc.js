function add(a,b)
{
    console.log("addition =",a+b)
}

function sub(a,b)
{
    console.log("subtraction =",a-b)
}

function mul(a,b)
{
    console.log("multiplication     =",a*b)
}


module.exports.addition = add
module.exports.subtraction = sub
module.exports.multiplication = mul