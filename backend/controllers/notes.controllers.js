import Note from "../models/notes.model.js";

export const getNote = async(req, res) => {
    try{
        const notes = await Note.find({});
        res.status(200).json({success: true, data: notes})
    } catch{
        res.status(500).json({success: false, message: "operation failed!"})
    }
}

export const postNote = async(req, res) => {
    const note = req.body;
    const newNote = new Note(note);

    if (!note || !note.description || !note.date) {
        return res.status(400).json({ success: false, message: 'please provide all fields' });
    }

    try{
        await newNote.save();
         res.status(200).json({success: true, data: newNote})
    } catch{
        res.status(500).json({success: false, message: "operation failed!"})
    }
}
export const deleteNote = async(req, res) => {
    const { id } = req.params;

    try{
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ success: false, message: "product not found!" });
        }
        res.status(200).json({success: true, message: "deleted!", data: deletedNote})
    } catch{
        res.status(500).json({success: false, message: "operation failed!"})
    }
}
export const updateNote = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ success: false, message: "Note not found!" });
        }

        res.status(200).json({ success: true, data: updatedNote });
    } catch {
        res.status(500).json({ success: false, message: "Operation failed!" });
    }
};