const userModel = require("../models/user.model");

async function userRegistration(req,res){
    console.log(req.body);

    res.status(200).json(
        {
            msg: "testing"
        }
    )
}

async function userLogin(req,res){

}


module.exports = {
    userRegistration,
    userLogin
}