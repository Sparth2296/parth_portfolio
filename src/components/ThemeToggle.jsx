import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Toggle.css'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle toggle_button" onClick={toggleTheme} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      {darkMode ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} color="#fff" />}
    </button>
  );
};

export default ThemeToggle;