
import React from 'react';

const Card = ({title, children}) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-6 dark:bg-gray-800 text-gray-800 dark:text-white 
                        transition duration-300 transform hover:shadow-2xl"> 
            {title && <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{title}</h2>}
            <div>{children}</div>
        </div>
    );
};

export default Card;
