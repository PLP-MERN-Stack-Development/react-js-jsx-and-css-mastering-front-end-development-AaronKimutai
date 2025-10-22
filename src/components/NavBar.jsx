import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
    return (
        
        <nav className="bg-gray-800 dark:bg-gray-950 p-4 px-6 md:px-10 text-white flex justify-between items-center shadow-lg transition-colors duration-500">
            <h2 className="text-2xl font-bold text-white dark:text-indigo-400">React Mastery</h2>
            <div className="flex items-center space-x-4 md:space-x-6">
                
                
                <Link to="/" className="text-sm md:text-base text-gray-100 dark:text-gray-100 hover:text-indigo-400 transition duration-200">Home</Link>
                <Link to="/tasks" className="text-sm md:text-base text-gray-100 dark:text-gray-100 hover:text-indigo-400 transition duration-200">Tasks</Link>
                <Link to="/api" className="text-sm md:text-base text-gray-100 dark:text-gray-100 hover:text-indigo-400 transition duration-200">API</Link>
                
                <ThemeToggle /> 
            </div>
        </nav>    
    );
};

export default NavBar;
