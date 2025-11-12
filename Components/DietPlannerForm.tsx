
import React, { useState } from 'react';
import { DIET_GOALS, DIETARY_PREFERENCES } from '../constants';
import { DietGoal, DietaryPreference, UserInput } from '../types';

interface DietPlannerFormProps {
    onSubmit: (data: UserInput) => void;
    isLoading: boolean;
}

const InputField: React.FC<{ label: string; id: string; children: React.ReactNode }> = ({ label, id, children }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        {children}
    </div>
);


const DietPlannerForm: React.FC<DietPlannerFormProps> = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState<UserInput>({
        name: '',
        age: 25,
        height: 170,
        weight: 70,
        goal: DietGoal.MAINTENANCE,
        preference: DietaryPreference.ANY,
        allergies: '',
        duration: 4,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'age' || name === 'height' || name === 'weight' || name ==='duration' ? Number(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="w-full max-w-lg p-8 space-y-6 bg-base-100 rounded-2xl shadow-xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Create Your Plan</h2>
                <p className="mt-2 text-sm text-gray-600">Fill in your details to get a personalized diet plan.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Name" id="name">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Jane Doe"
                        />
                    </InputField>
                    <InputField label="Age" id="age">
                        <input
                            id="age"
                            name="age"
                            type="number"
                            required
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </InputField>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Height (cm)" id="height">
                        <input
                            id="height"
                            name="height"
                            type="number"
                            required
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                            value={formData.height}
                            onChange={handleChange}
                        />
                    </InputField>
                    <InputField label="Weight (kg)" id="weight">
                        <input
                            id="weight"
                            name="weight"
                            type="number"
                            required
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                    </InputField>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InputField label="Goal" id="goal">
                        <select
                            id="goal"
                            name="goal"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                            value={formData.goal}
                            onChange={handleChange}
                        >
                            {DIET_GOALS.map(goal => <option key={goal} value={goal}>{goal}</option>)}
                        </select>
                    </InputField>
                    <InputField label="Dietary Preference" id="preference">
                        <select
                            id="preference"
                            name="preference"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                            value={formData.preference}
                            onChange={handleChange}
                        >
                            {DIETARY_PREFERENCES.map(pref => <option key={pref} value={pref}>{pref}</option>)}
                        </select>
                    </InputField>
                </div>
                <InputField label="Duration (weeks)" id="duration">
                    <input
                        id="duration"
                        name="duration"
                        type="number"
                        required
                        min="1" max="52"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                        value={formData.duration}
                        onChange={handleChange}
                    />
                </InputField>
                <InputField label="Allergies (comma-separated)" id="allergies">
                    <input
                        id="allergies"
                        name="allergies"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="e.g., Peanuts, Gluten"
                    />
                </InputField>
                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? 'Generating Plan...' : 'Generate My Diet Plan'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DietPlannerForm;