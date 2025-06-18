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
/**
 * Login controller
 * 1) email xyz@gmail.com password 123456
 * 2) email qqq@gmail.com password qwerty
 * 3) email ibrahemm@gmail.com password 123456
 * database qeurry email xyz@gmail.com
 * password 123456
 */
async function userLogin(req,res){
    const  {email, password} = req.body;
    try {
        const isUserExists = await userModel.findOne({email});
        console.log("isUserExists",isUserExists);

        if(!isUserExists){
            res.status(400).json({
                msg: "user email does not exists"
            })
        }

        const isPasswordCorrect = await isUserExists.comparePassword(password);
        console.log("isPasswordCorrect",isPasswordCorrect);

        if(isPasswordCorrect === false){
            res.status(400).json({
                msg: "Password is incorrect"
            });
        }

        const accessToken = await isUserExists.accessToken();
        console.log("Acess token:",`Bearer ${accessToken}`);
        // token generate -> access 

        res.status(200).json({
            msg: "user has been successfully logged in",
            statusCode: 200,
            token: `Bearer ${accessToken}`,
            id: isUserExists._id,
        });

    } catch (error) {
        console.log("error in login controller", error.msg);
        res.status(500).json(
            {
                msg: "Server error in Login Controller"
            }
        )
    }

}

module.exports = {
    userRegister,
    userLogin
}