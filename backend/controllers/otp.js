const User = require('../modals/User');
const { createToken } = require('../utils/JWT_Token')

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

module.exports = verifyOTP 