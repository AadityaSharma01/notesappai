import { create } from "zustand";
const baseURL = import.meta.env.VITE_REACT_APP_API_URL

export const useNote = create((set) => ({
    notes: [],
    setNote: (notes) => set({notes}),

    createNote: async (newNote) => {
        if(!newNote.description || !newNote.date){
            return{success: "false", message: "failed to create note"}
        }

        const res = await fetch(`${baseURL}/api/notes`, {
            method: "POST",
            headers:{ "content-type": "application/json" },
            body: JSON.stringify(newNote)
        });

        const data = await res.json();
        set((state) => ({notes: [...state.notes, data.data]}))

        return {success: true, message: "note created"}
    },

    fetchNotes: async() => {
        const res = await fetch(`${baseURL}/api/notes`);
        const data = await res.json();

        set({notes: data.data});
    },

    deleteNote: async(nid) => {
        const res = await fetch(`${baseURL}/api/notes/${nid}`, {
            method: "DELETE",
        });

        await res.json();
        set(state => ({notes: state.notes.filter(note => note._id != nid)}));
    }
}))
