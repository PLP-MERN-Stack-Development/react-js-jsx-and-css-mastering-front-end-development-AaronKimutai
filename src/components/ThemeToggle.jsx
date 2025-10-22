import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} variant="secondary" size="sm">
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </Button>
  );
};

export default ThemeToggle;
