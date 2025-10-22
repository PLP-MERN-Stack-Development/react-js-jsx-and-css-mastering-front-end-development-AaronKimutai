import React, { useState } from 'react';
import Button from './Button';
import useLocalStorageTasks from '../hooks/useLocalStorageTasks'; 

const TaskManager = () => {
    const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks(); 
    const [newTaskText, setNewTaskText] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTaskText); 
        setNewTaskText('');
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md transition-colors duration-500 text-gray-800 dark:text-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Task Manager</h2>
            </div>

            <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Add a new task..."
                    
                    className="grow px-4 py-2 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <Button type="submit" variant="primary" disabled={!newTaskText.trim()}>Add Task</Button>
            </form>

            
            <div className="flex flex-wrap gap-2 mb-4">
                <Button variant={filter === 'all' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('all')}>All</Button>
                <Button variant={filter === 'active' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('active')}>Active</Button>
                <Button variant={filter === 'completed' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('completed')}>Completed</Button>
            </div>

            <ul className="space-y-2">
                {filteredTasks.length === 0 ? (
                    <li className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks found</li>
                ) : (
                    filteredTasks.map(task => (
                        <li key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 transition duration-200">
                            <div className="flex items-center gap-3">
                                
                                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500" />
                                <span className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}>{task.text}</span>
                            </div>
                            
                            <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
                        </li>
                    ))
                )}
            </ul>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <p>{tasks.filter(task => !task.completed).length} tasks remaining</p>
            </div>
        </div>
    );
};

export default TaskManager;