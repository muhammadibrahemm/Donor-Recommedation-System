const userModel = require('../models/user.model');
const nodemailer = require("nodemailer")
const donorInfoModel = require("../models/donor.info.model");
const { sendIneligibilityEmail, sendSuccessEmail } = require("../helpers/emailSender");
const getAvailabilityStatus = require("../utils/getAvailabilityStatus");

/**
 * Arrow Function
 */

// 1) user registration



const userRegister = async (req, res) => {
  const {
    name,
    email,
    password,
    bloodGroup,
    city,
    phone,
    role,
    zipcode,
    age,
    gender,
    lastDonationDate
  } = req.body;

  if (age < 18 || age > 65) {
    res.status(200).json({ message: "User not eligible. Email will be sent.", status: 200 });
    sendIneligibilityEmail(email);
    return;
  }

  try {
    const isUserCreated = await userModel.create({
      name,
      email,
      password,
      bloodGroup,
      city,
      phone,
      role,
      zipcode,
      age,
      gender
    });

    const lastDate = lastDonationDate ? new Date(lastDonationDate) : null;
    const available = role === "donor" ? getAvailabilityStatus(lastDate) : null;

    if (role === "donor") {
      await donorInfoModel.create({
        donorRefID: isUserCreated._id,
        lastDonationDate: lastDate,
        donationCount: [],
        available: available
      });
    }

    res.status(201).json({
      msg: "User has been created. Confirmation email will be sent.",
      status: 201
    });

    sendSuccessEmail({
      name,
      email,
      bloodGroup,
      city,
      phone,
      zipcode,
      role,
      age,
      availability: available
    });
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

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
                msg: "Login failed. Please check your credentials and try again.",
                status: 400
            })
        }

        const isPasswordCorrect = await isUserExists.comparePassword(password);
        console.log("isPasswordCorrect",isPasswordCorrect);

        if(isPasswordCorrect === false){
            res.status(400).json({
                msg: "Password is incorrect",
                status: 400
            });
        }

        const accessToken = await isUserExists.accessToken();
        console.log("Acess token:",`Bearer ${accessToken}`);
        // token generate -> access 

        res.status(200).json({
            msg: "Login successful! We're glad to have you back.",
            status: 200,
            token: `Bearer ${accessToken}`,
            id: isUserExists._id,
            role: isUserExists.role
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