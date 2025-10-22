import React from 'react';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full"> 
      <h1 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Tasks Page</h1>     
      <TaskManager />
    </div>
  );
};

export default Tasks;