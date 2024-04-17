const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    otp: { type: 'number', default: 0 },
    tokens: [{
        token: { type: 'string' }
    }]
})

module.exports = mongoose.model('User', User)