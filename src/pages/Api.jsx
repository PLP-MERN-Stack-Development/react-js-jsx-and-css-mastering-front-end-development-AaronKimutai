import React from 'react';
import ToDoApi from '../api/ApiList';

function Api() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">API Page</h1>
            <ToDoApi />
        </div>
    );
};

export default Api;

