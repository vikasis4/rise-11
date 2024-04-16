const mongoose = require('mongoose');

const Notes = new mongoose.Schema({
    userId: { type: 'string', required: true },
    notes: [{
        noteId: { type: 'string' },
        note: { type: 'string' }
    }]
})

module.exports = mongoose.model('Note', Notes)