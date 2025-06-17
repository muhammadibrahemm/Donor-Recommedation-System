const userModel = require('../models/user.model');

/**
 * Arrow Function
 */

// 1) user registration
const userRegister = async (req, res) => {

    const {name, email, password, bloodGroup, city, phone, available, role, latAndLon} = req.body;

    try {
        // user found logic
        const userFound = await userModel.findOne(
            {
                email:email
            }
        )
    
        console.log("userExist",userFound);


        if(userFound){
            res.status(400).json({
                msg: "user email is already registered"
            });
        }
    
        // user created logic
        const isUserCreated = await userModel.create({
            name:name,
            email:email,
            password:password,
            bloodGroup:bloodGroup,
            city:city,
            phone:phone,
            available:available,
            role:role,
            latAndLon:latAndLon
        });
    
        console.log("isUserCreated:",isUserCreated);
    
        
    
        res.status(201).json({
            msg: "user has been created",
            isUserCreated
        })
    } catch (error) {
        console.log("error in registration user:",error);
        res.status(500).json({
            msg:"Server error"
        })
    }
}

// user login
async function userLogin(req,res){

}

module.exports = {
    userRegister,
    userLogin
}