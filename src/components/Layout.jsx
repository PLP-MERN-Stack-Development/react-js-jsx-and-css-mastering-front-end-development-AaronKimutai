import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
   
    const { theme } = useTheme(); 

    return (
        
        <div className="min-h-screen flex flex-col"> 
            
            
            <div className="flex flex-col min-h-screen 
                            bg-gray-50 dark:bg-gray-900 
                            text-gray-900 dark:text-gray-100 
                            transition-colors duration-500">
                <NavBar />
                
                
                <main className="container mx-auto px-5 py-9 grow"> 
                    {children} 
                </main>
                
                <Footer />
            </div>
        </div>
    );
};
export default Layout;
