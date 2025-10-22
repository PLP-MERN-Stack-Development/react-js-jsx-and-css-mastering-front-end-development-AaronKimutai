
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    onClick, 
    children,
    className = '',
    ...rest 
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]';
    
    // Fully dark-mode aware variants
    const variantClasses = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500/50',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500/50',
        danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500/50',
    };
    
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };
    
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${disabledClasses} ${className}`;
    
    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
   
};

export default Button;