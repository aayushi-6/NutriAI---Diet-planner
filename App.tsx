
import React, { useState, useCallback } from 'react';
import DietPlannerForm from './components/DietPlannerForm';
import DietPlanDisplay from './components/DietPlanDisplay';
import Spinner from './components/icons/Spinner';
import { generateDietPlan } from './services/geminiService';
import type { UserInput, DietPlan } from './types';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);

    const handleGeneratePlan = useCallback(async (userInput: UserInput) => {
        setIsLoading(true);
        setError(null);
        setDietPlan(null);
        try {
            const plan = await generateDietPlan(userInput);
            setDietPlan(plan);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    const WelcomeScreen: React.FC = () => (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NutriAI</h1>
            <p className="text-lg text-gray-600 mb-6">Your personalized journey to better health starts here. Fill out the form to generate a custom diet plan.</p>
            <div className="max-w-md mx-auto bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-primary font-semibold">Let's get started!</p>
            </div>
        </div>
    );
    
    return (
        <div className="min-h-screen bg-base-200 font-sans text-gray-800">
            <header className="bg-base-100 shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">NutriAI</h1>
                </div>
            </header>
            
            <main className="container mx-auto p-4 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-8">
                        <DietPlannerForm onSubmit={handleGeneratePlan} isLoading={isLoading} />
                    </div>
                    
                    <div className="w-full lg:w-2/3 bg-base-100 rounded-2xl shadow-xl min-h-[60vh] flex items-center justify-center p-4">
                        {isLoading && <Spinner />}
                        {error && <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg"><strong>Error:</strong> {error}</div>}
                        {!isLoading && !error && dietPlan && <DietPlanDisplay plan={dietPlan} />}
                        {!isLoading && !error && !dietPlan && <WelcomeScreen />}
                    </div>
                </div>
            </main>

            <footer className="text-center py-6 px-4 text-sm text-gray-500">
                <p>Powered by Google Gemini. This is not medical advice. Consult a healthcare professional before starting any diet plan.</p>
            </footer>
        </div>
    );
};

export default App;