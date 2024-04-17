const mongoose = require('mongoose');

const Notes = new mongoose.Schema({
    userId: { type: 'string', required: true },
    notes: [{
        note: { type: 'string' }
    }]
})

module.exports = mongoose.model('Note', Notes)