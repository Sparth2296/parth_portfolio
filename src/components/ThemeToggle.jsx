import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      {darkMode ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} color="#fff" />}
    </button>
  );
};

export default ThemeToggle;