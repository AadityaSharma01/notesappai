import { Routes, Route } from 'react-router-dom';
import Createnote from './components/Createnote.jsx';
import Homepage from './components/Homepage.jsx';
import Navbar from './components/Navbar.jsx';
import React from 'react';

import styles from "./styles/app.module.css"

const App = () => {
  return (
    <>
    <Navbar className={styles.Navbar} />
      <div className={styles.routes}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Createnote />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
