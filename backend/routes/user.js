const express = require('express');
const router = express.Router();
const { googleSignIn, googleSignUp, signIn, signUp } = require('../controllers/user');
const { verifyToken } = require('../utils/JWT_Token')
const verifyOTP = require('../controllers/otp')

router.route('/google/signup').post(googleSignUp);
router.route('/google/signin').post(googleSignIn);
router.route('/jwt/verify/:token').get(verifyToken);

router.route('/signIn').post(signIn);
router.route('/signUp').post(signUp);
router.route('/otp/verify').post(verifyOTP);


module.exports = router