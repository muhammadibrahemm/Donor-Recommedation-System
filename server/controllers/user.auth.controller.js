const userModel = require('../models/user.model');
const nodemailer = require("nodemailer")

/**
 * Arrow Function
 */

// 1) user registration
const userRegister = async (req, res) => {
    const { name, email, password, bloodGroup, city, phone, available, role, zipcode, age,gender } = req.body;
  
    const senderEmail = "muhammadibraheem8567@gmail.com";
    const registrationEmail = email;
    const pass = process.env.PASS;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: senderEmail,
        pass: pass,
      },
    });
  
    // If user is not eligible
    if (age < 18 || age > 65) {
      const mailOptions = {
        from: senderEmail,
        to: registrationEmail,
        subject: 'Eligibility Notice from LifeSaver System',
        html: `
          <html>
          <body style="font-family: Arial, sans-serif; background-color: #fef2f2; padding: 30px;">
            <table style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
              <tr>
                <td style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
                  <h2>LifeSaver System</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px; text-align: center;">
                  <h3 style="color: #dc2626;">You are not eligible to register 😔😔😔</h3>
                  <p>Unfortunately, your age does not fall within the eligible range of 18-65 years.</p>
                  <p>We appreciate your interest in the <strong>LifeSaver System</strong>.</p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f3f4f6; text-align: center; font-size: 12px; padding: 20px;">
                  &copy; ${new Date().getFullYear()} LifeSaver System. For support: <a href="mailto:support@lifesaver.com" style="color:#dc2626;">support@lifesaver.com</a>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending ineligible email:", error);
          return res.status(500).json({ message: 'Failed to send eligibility email' });
        }
        return res.status(403).json({ message: 'User not eligible. Email sent.' });
      });
  
      return; // Don't proceed further
    }
  
    try {
      // Save new user
      const isUserCreated = await userModel.create({
        name,
        email,
        password,
        bloodGroup,
        city,
        phone,
        available,
        role,
        zipcode,
        age,
        gender
      });
  
      // Success registration email
      const mailOptions = {
        from: senderEmail,
        to: registrationEmail,
        subject: 'Welcome to LifeSaver System',
        html: `
          <html>
          <body style="font-family: Arial, sans-serif; background-color: #f0fdf4; padding: 30px;">
            <table style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
              <tr>
                <td style="background-color: #16a34a; color: white; padding: 20px; text-align: center;">
                  <h2>LifeSaver System</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <h3 style="color: #16a34a; text-align: center;">🎉 Registration Successful!</h3>
                  <p style="text-align: center;">Thank you for joining the <strong>LifeSaver System</strong>, <strong>${name}</strong>!</p>
                  <p style="margin-top: 20px;">Here are your registration details:</p>
                  <ul style="line-height: 1.8; padding-left: 20px;">
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Blood Group:</strong> ${bloodGroup}</li>
                    <li><strong>City:</strong> ${city}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Zipcode:</strong> ${zipcode}</li>
                    <li><strong>Availability:</strong> ${available ? "Available to Donate" : "Not Available"}</li>
                    <li><strong>Role:</strong> ${role}</li>
                    <li><strong>Age:</strong> ${age}</li>
                  </ul>
                  <p style="margin-top: 20px;">You are now part of a life-saving mission.❤️❤️❤️</p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f3f4f6; text-align: center; font-size: 12px; padding: 20px;">
                  &copy; ${new Date().getFullYear()} LifeSaver System. For support: <a href="mailto:support@lifesaver.com" style="color:#16a34a;">support@lifesaver.com</a>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending success email:", error);
          return res.status(500).json({ message: 'User created, but failed to send welcome email' });
        }
        res.status(201).json({
          msg: "User has been created and confirmation email sent",
          isUserCreated,
        });
      });
    } catch (error) {
      console.log("error in registering user:", error);
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