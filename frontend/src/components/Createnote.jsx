import { useState } from "react";
import { useNote } from "../../CRUD/notes";
import styles from "../styles/createnote.module.css";
import React from "react";

const Createnote = () => {
  const today = new Date();
  const isoDate = today.toISOString().split("T")[0]; // yyyy-mm-dd for input[type="date"]
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  const [newNote, setNewNote] = useState({
    name: "",
    description: "",
    date: isoDate,
    summary: "",
  });

  const { createNote } = useNote();

  const handleCreate = async () => {
    if (!newNote.description.trim()) {
      alert("Note description cannot be empty!");
      return;
    }

    await createNote(newNote);
    setNewNote({ name: "", description: "", date: formattedDate, summary: "" });
  };

  const handleAIgen = async () => {
    try {
      const response = await fetch("/api/ai/title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: newNote.description }),
      });

      const data = await response.json();
      if (!newNote.name && data.result) {
        setNewNote((note) => ({ ...note, name: data.result }));
      }
    } catch (error) {
      console.error("AI title generation failed", error);
    }
  };

  const handleAIgensummary = async () => {
    try {
      const response = await fetch("/api/ai/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: newNote.description }),
      });

      const data = await response.json();
      if (data.result) {
        setNewNote((note) => ({ ...note, summary: data.result }));
      }
    } catch (error) {
      console.error("AI summary generation failed", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Title + AI title button */}
      <div className={styles.row}>
        <textarea
          placeholder="You can generate an AI title"
          className={styles.titleInput}
          onChange={(e) => setNewNote({ ...newNote, name: e.target.value })}
          value={newNote.name}
        />
        <button
          onClick={handleAIgen}
          className={`${styles.buttonBase} ${styles.aiTitleButton}`}
        >
          Use AI Gen
        </button>
      </div>

      {/* Description */}
      <textarea
        placeholder="Write your note..."
        className={styles.bigTextarea}
        onChange={(e) =>
          setNewNote({ ...newNote, description: e.target.value })
        }
        value={newNote.description}
      />

      {/* Summary */}
      <textarea
        placeholder="Write your own summary"
        className={styles.bigTextarea}
        onChange={(e) => setNewNote({ ...newNote, summary: e.target.value })}
        value={newNote.summary}
      />

      {/* Date + AI summary button */}
      <div className={styles.row}>
        <input
          type="date"
          className={styles.dateInput}
          onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
          value={newNote.date}
        />
        <button
          onClick={handleAIgensummary}
          className={`${styles.buttonBase} ${styles.aiSummaryButton}`}
        >
          Use AI Summary
        </button>
      </div>

      {/* Create button at the bottom */}
      <button
        onClick={handleCreate}
        className={`${styles.buttonBase} ${styles.createButton}`}
        style={{ marginTop: "1rem" }}
      >
        Create
      </button>
    </div>
  );
};

export default Createnote;
