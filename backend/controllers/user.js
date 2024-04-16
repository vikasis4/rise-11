const User = require('../modals/User');
const { createToken } = require('../utils/JWT_Token')

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
const googleSignUp = async (req, res) => {
    try {
        const { email, name } = req.body;
        var user = await User.findOne({ email: email });

        if (user.length > 0) {
            res.json({ status: 'duplicate' });
            return
        }

        var newUser = await User.create({ email, name});
        var token = await createToken(newUser);
        await newUser.save();
        res.json({ status: 'true', token });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
};

module.exports = { googleSignIn, googleSignUp }