import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item
  const location = useLocation(); // Get the current location

  // Effect to set the initial selected item based on the current URL
  useEffect(() => {
    const currentPath = location.pathname; // Use location.pathname directly
    if (currentPath === '/') {
      setSelectedItem('home');
    } else if (currentPath === '/blog') {
      setSelectedItem('blog');
    } else if (currentPath === '/maps') {
      setSelectedItem('maps');
    } else if (currentPath === '/about') {
      setSelectedItem('about');
    } else {
      setSelectedItem(null); // Clear selection for unmatched paths
    }
  }, [location.pathname]); // Update the dependency to listen for pathname changes

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item); // Update the selected item state
  };

  return (
    <>
      <nav className="navbar">
        <div className="logotext">tropical being.</div>
        <Link className='mobile-icon'><ThemeToggle /></Link>
          <ul className="navbar-links">
            <li className={selectedItem === 'home' ? 'selected' : ''}>
              <Link to="/" onClick={() => handleItemClick('home')}>home</Link>
            </li>
            <li className={selectedItem === 'blog' ? 'selected' : ''}>
              <Link to="/blog" onClick={() => handleItemClick('blog')}>blog</Link>
            </li>
            <li className={selectedItem === 'maps' ? 'selected' : ''}>
              <Link to="/maps" onClick={() => handleItemClick('maps')}>maps</Link>
            </li>
            <li className={selectedItem === 'about' ? 'selected' : ''}>
              <Link to="/about" onClick={() => handleItemClick('about')}>about</Link>
            </li>
          </ul>
        <Link className='pc-icon'><ThemeToggle /></Link>
      </nav>
    </>
  );
};

export default Navbar;