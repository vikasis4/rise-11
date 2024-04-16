const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.mail_account,
        pass: process.env.mail_pass,
    },
});
async function SendOtp(otp, email) {
    await transporter.sendMail({
        from: process.env.mail_account,
        to: email,
        subject: "NOTION - OTP Verification",
        html: `<b>Use this OTP to verify your credentials :- ${otp}</b>`,
    });
}


const generateOtp = async (user) => {
    try {
        var otp = Math.floor(Math.random()*1000000);
        user.otp = otp;
        await user.save();
        await SendOtp(otp, user.email);
        return 1
    } catch (error) {
        console.log(error);
        return 0
    }
}

module.exports = generateOtp