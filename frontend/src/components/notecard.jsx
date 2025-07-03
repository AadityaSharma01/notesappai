import { useNote } from "../../CRUD/notes";
import styles from "../styles/notecard.module.css";
import React from "react";

const NoteCard = ({ note }) => {
  const { deleteNote } = useNote();

  const deletehandler = async (nid) => {
    deleteNote(nid);
  };

  return (
    <div>
      <div className={styles.card} id="noteCard">
        <h3 className={styles.title}>{note.name}</h3>
        <p className={styles.description}>{note.description}</p>
        <p className={styles.date}>{note.date}</p>

        {note.summary ? (
          <p className={styles.description}>{note.summary}</p>
        ) : (
          <p></p>
        )}
      </div>
      <button className={styles.deleteButton} onClick={() => deletehandler(note._id)}>
        DELETE
      </button>
    </div>
  );
};

export default NoteCard;
