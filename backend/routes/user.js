const express = require('express');
const router = express.Router();
const { googleSignIn, googleSignUp } = require('../controllers/user');
const { verifyToken } = require('../utils/JWT_Token')

router.route('/google/signup').post(googleSignUp)
router.route('/google/signin').post(googleSignIn)
router.route('/jwt/verify').post(verifyToken)

module.exports = router