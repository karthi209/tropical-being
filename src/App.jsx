import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Maps from './components/Maps';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;