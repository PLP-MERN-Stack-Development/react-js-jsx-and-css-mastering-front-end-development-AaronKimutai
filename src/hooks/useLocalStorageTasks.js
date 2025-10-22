
import { useState, useEffect } from 'react';

// Custom hook for persisting tasks to local storage
const useLocalStorageTasks = () => {
    // 1. Lazy state initialization from local storage
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch (error) {
            console.error("Failed to load tasks from local storage:", error);
            return [];
        }
    });

    // 2. Effect for saving tasks whenever the state changes
    useEffect(() => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error("Failed to save tasks to local storage:", error);
        }
    }, [tasks]);

    // Task manipulation functions
    const addTask = (text) => {
        if (!text.trim()) return;
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    return { tasks, addTask, toggleTask, deleteTask };
};

export default useLocalStorageTasks;