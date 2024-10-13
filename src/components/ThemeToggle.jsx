import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./css/Navbar.css"

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // Apply the theme on initial load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);  // Persist the theme

    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 300);
  };

  return (
    <LightModeIcon onClick={toggleTheme} className={`iconclass ${isRotating ? 'rotate' : ''}`}/>
  );
};

export default ThemeToggle;