import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Maps from './components/Maps';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tropical-being" element={<Home />} />
        <Route path="/tropical-being/blog" element={<Blog />} />
        <Route path="/tropical-being/blog/:slug" element={<Blog />} />
        <Route path="/tropical-being/maps" element={<Maps />} />
        <Route path="/tropical-being/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;