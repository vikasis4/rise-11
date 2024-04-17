const Notes = require('../modals/Notes');
const User = require('../modals/User');

const GetNotes = async (req, res) => {
    try {
        var userId = req.params.userId;
        var notes = await Notes.findOne({ userId });
        res.json({ status: 'true', notes })
    } catch (error) {
        console.log(error);
        res.json({ status: 'false' })
    }
}

const EditNote = async (req, res) => {
    try {
        var { userId, noteId, note } = req.body
        var noteList = await Notes.findOne({ userId });
        var element = noteList.notes.filter(({ _id }) => noteId == _id);
        var index = noteList.notes.indexOf(element[0]);
        noteList.notes[index] = { note, _id: noteId };
        await noteList.save()

    } catch (error) {
        console.log(error);
        res.json({ status: 'false' })
    }
}

const DeleteNote = async (req, res) => {
    try {
        var { noteId, userId } = req.params;
        var noteList = await Notes.findOne({ userId });
        var element = noteList.notes.filter(({ _id }) => noteId == _id);
        var index = noteList.notes.indexOf(element[0]);
        noteList.notes.splice(index, 1);
        await noteList.save()
    } catch (error) {
        console.log(error);
        res.json({ status: 'false' })
    }
}

const createNote = async (req, res) => {
    try {
        var { userId, note } = req.body;
        var noteList = await Notes.find({ userId });
        if (!noteList) {
            noteList = await Notes.create({
                userId
            })
        }
        noteList.notes.push({ note });
        noteList.save()
        res.json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.json({ status: 'false' })
    }
}

module.exports = { createNote, EditNote, DeleteNote, GetNotes }