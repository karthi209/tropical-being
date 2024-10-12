import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item
  const location = useLocation(); // Get the current location

  // Effect to set the initial selected item based on the current URL
  useEffect(() => {
    const currentPath = location.pathname; // Use location.pathname directly
    if (currentPath === '/tropical-being') {
      setSelectedItem('home');
    } else if (currentPath === '/tropical-being/blog') {
      setSelectedItem('blog');
    } else if (currentPath === '/tropical-being/maps') {
      setSelectedItem('maps');
    } else if (currentPath === '/tropical-being/about') {
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
    <nav className="navbar">
      <div className="logotext">tropical being.</div>
      <ul className="navbar-links">
        <li className={selectedItem === 'home' ? 'selected' : ''}>
          <Link to="/tropical-being" onClick={() => handleItemClick('home')}>Home</Link>
        </li>
        <li className={selectedItem === 'blog' ? 'selected' : ''}>
          <Link to="/tropical-being/blog" onClick={() => handleItemClick('blog')}>Blog</Link>
        </li>
        <li className={selectedItem === 'maps' ? 'selected' : ''}>
          <Link to="/tropical-being/maps" onClick={() => handleItemClick('maps')}>Maps</Link>
        </li>
        <li className={selectedItem === 'about' ? 'selected' : ''}>
          <Link to="/tropical-being/about" onClick={() => handleItemClick('about')}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;