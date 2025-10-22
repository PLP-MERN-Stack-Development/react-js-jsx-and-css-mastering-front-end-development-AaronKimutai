
import React, { useState, useEffect } from "react";
import Card from '../components/Card'; 
import Button from '../components/Button';

function ApiList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter items based on search query
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination calculations
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Use Card component for loading/error
    if (loading) return <div className="w-full max-w-2xl mx-auto"><Card><p className="text-center py-4">Loading data...</p></Card></div>;
    if (error) return <div className="w-full max-w-2xl mx-auto"><Card><p className="text-center py-4 text-red-500">Error: {error}</p></Card></div>;

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-0">
            <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">Todo List</h2>

            {/* Search input: Added dark mode and focus styling */}
            <input
                type="text"
                placeholder="Search todos..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1); 
                }}
                className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition duration-200"
            />

            
            <div className="space-y-3">
                {currentItems.map((item) => (
                    <Card key={item.id}> 
                        <div className="flex justify-between items-center">
                            <span className={item.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}>
                                {item.title}
                            </span>
                            {item.completed && (
                                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">Completed</span>
                            )}
                        </div>
                    </Card>
                ))}
            </div>

            {/* Pagination: Responsive layout  */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-3 sm:space-y-0">
                <Button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1} 
                    variant="primary"
                    className="w-full sm:w-auto" // Full width on mobile
                >
                    Previous
                </Button>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <Button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages} 
                    variant="primary"
                    className="w-full sm:w-auto" // Full width on mobile
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default ApiList;