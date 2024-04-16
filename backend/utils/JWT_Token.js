var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config()

const createToken = async (data) => {
    try {
        var token = jwt.sign(JSON.stringify({
            email: data.email,
            _id: data._id,
            name: data.name,
        }), process.env.secretTokenKey);
        data.tokens.push({ token });
        return token;
    } catch (error) {
        console.log(error);
        return 'false'
    }
}

const verifyToken = async (req, res) => {
    try {
        var token = jwt.verify(req.body.token, process.env.secretTokenKey);
        res.json({ status: 'true', token });
    } catch (error) {
        console.log(error);
        res.json({ status: 'false' });
    }

}

module.exports = { createToken, verifyToken };