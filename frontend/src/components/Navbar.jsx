import { Link } from "react-router-dom";
import React from "react";
import styles from "../styles/navbar.module.css"

import { useState, useEffect } from "react";

const Navbar = () => {
  const [colormode, setColormode] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setColormode(saved);
  }, [])

  useEffect(() => {
    document.body.classList.toggle("dark", colormode === "dark")
  }, [colormode]);

  return (
    <div className="dark">
      <nav className={styles.bar}>
        <div className={styles.barfont}>📝 NoteApp</div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/create" className={styles.link}>Create</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
