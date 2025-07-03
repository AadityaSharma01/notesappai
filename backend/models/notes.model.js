import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    name: {
        type: String, required: false,
    },
    description: {
        type: String, required: true,
    },
    date:{
        type: Date, required: true,
    },
    summary: {
        type: String, required: false,
    }
});

const Note = mongoose.model("Note", notesSchema)
export default Note;
