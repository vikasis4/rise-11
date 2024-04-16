const User = require('../modals/User');
const { createToken } = require('../utils/JWT_Token');
const generateOtp = require('../utils/otp');


/////////////////////////////////////////////////////////////////////
const googleSignIn = async (req, res) => {
    try {
        const { email } = req.body;
        var user = await User.findOne({ email: email });

        if (user.length == 0) {
            res.json({ status: 'noUser' });
            return
        }

        var token = await createToken(user);
        res.json({ status: 'true', token });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
};

/////////////////////////////////////////////////////////////////////
const googleSignUp = async (req, res) => {
    try {
        const { email, name } = req.body;
        var user = await User.findOne({ email });

        if (user.length > 0) {
            res.json({ status: 'duplicate' });
            return
        }

        user = await User.create({ email, name });
        var token = await createToken(user);
        res.json({ status: 'true', token });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
};

/////////////////////////////////////////////////////////////////////
const signUp = async (req, res) => {
    try {
        const { email, name } = req.body;
        var user = await User.findOne({ email });
        if (user.length > 0) {
            res.json({ status: 'duplicate' });
            return
        }
        user = await User.create({ email, name });
        var otp = await generateOtp(user);
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

/////////////////////////////////////////////////////////////////////
const signIn = async (req, res) => {
    try {
        const { email } = req.body;
        var user = await User.findOne({ email });
        if (user.length == 0) {
            res.json({ status: 'noUser' });
            return
        }
        var otp = await generateOtp(user);
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

module.exports = { googleSignIn, googleSignUp, signIn, signUp }