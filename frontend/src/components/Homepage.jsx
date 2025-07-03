import { useEffect } from "react";
import { useNote } from "../../CRUD/notes";
import NoteCard from "./notecard";
import Navbar from "./Navbar";
import React from "react";

const Homepage = () => {
  const { fetchNotes, notes, deleteNote } = useNote();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes, deleteNote]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}>


        {notes.length === 0 ? (
          <h1>oops! no notes.</h1>) : (
          notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))
        )}
      </div>
    </>
  )
}

export default Homepage;