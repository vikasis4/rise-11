const express = require('express');
const router = express.Router();

const { createNote, EditNote, DeleteNote, GetNotes } = require('../controllers/notes');

router.route('/get/:userId').get(GetNotes);
router.route('/createNote').post(createNote);
router.route('/EditNote').post(EditNote);
router.route('/deleteNote/:noteId/:userId').delete(DeleteNote);

module.exports = router