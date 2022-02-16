
module.exports.addRole = function (req,res)
{
    //db insert role
    console.log(req.body.firstName);
    res.json({msg:"role added",status:200,data:req.body})
}