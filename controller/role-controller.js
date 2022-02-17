const RoleModel = require("../model/role-module")



module.exports.addRole = function (req,res)
{
    //db insert role
    console.log(req.body);

    let role = new RoleModel({
        roleName:req.body.roleName
    })

    role.save(function (err,success) {
        if(err){
            console.log(err)
            //sendMailToDev(err)
            res.json({msg:"SWR",status:-1,data:req.body})
        }
        else{
            res.json({msg:"role added",status:200,data:success})
        }
        
    })


}