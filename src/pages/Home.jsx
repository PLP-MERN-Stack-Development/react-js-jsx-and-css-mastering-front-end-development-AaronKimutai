import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
    const navigate = useNavigate(); // Initialize the hook

    // Function to navigate to the Tasks page
    const handleGetStarted = () => {
        navigate('/tasks'); 
    };

    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="max-w-xl w-full">
                <Card title="Welcome to the React Mastery Project">
                    <p className="mb-4 text-lg">
                        This application demonstrates component architecture, state management with custom hooks, and API integration, all styled using responsive and theme-aware Tailwind CSS.
                    </p>
                    
                    <Button 
                        variant='primary' 
                        onClick={handleGetStarted}
                        className="transform transition-transform hover:scale-105"
                    >
                        Get started
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default Home;