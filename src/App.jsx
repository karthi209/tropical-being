import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Maps from './components/Maps';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;