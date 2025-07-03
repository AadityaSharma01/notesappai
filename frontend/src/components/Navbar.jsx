import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        position: "fixed",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>📝 NoteApp</div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "16px"
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "16px"
          }}
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
