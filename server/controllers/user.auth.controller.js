

/**
 * Arrow Function
 */

// 1) user registration
const userRegister = async (req, res) => {
    console.log("req body from user",req.body);

    res.status(200).json({
        msg: "its going smooth"
    })
}

// user login
async function userLogin(req,res){

}

module.exports = {
    userRegister,
    userLogin
}