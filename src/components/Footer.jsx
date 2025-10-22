import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 mt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
            <p className="mb-2 text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} React Mastery. All rights reserved.
            </p>
            <div className="space-x-4">
                <a 
                    href="#" 
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                    Privacy Policy
                </a>
                <a 
                    href="#" 
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                    Terms of Service
                </a>
            </div>
        </footer>
    );
};

export default Footer;