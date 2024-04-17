const User = require('../modals/User');
const { createToken } = require('../utils/JWT_Token')
const generateOtp = require('../utils/otp');

const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        var user = await User.findOne({ email });
        if (user.otp == otp) {
            var token = await createToken(user);
            res.json({ status: 'true', token });
            return
        }
        res.json({ status: 'false' })
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
}

const ResendOtp = async (req, res) => {
    try {
        var { email } = req.body;
        var user = await User.findOne({ email });
        var otp = await generateOtp(user)
        if (otp == 0) {
            res.json({ status: 'error' })
            return
        }
        res.json({ status: 'true' });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
}

module.exports = { verifyOTP, ResendOtp } 