
import React from 'react';
import type { DietPlan, DailyPlan, Meal } from '../types';

const MealCard: React.FC<{ title: string; meal: Meal }> = ({ title, meal }) => (
    <div className="bg-base-100 p-4 rounded-lg shadow-sm transition-shadow hover:shadow-md">
        <h4 className="text-lg font-semibold text-secondary mb-2">{title}</h4>
        <p className="text-xl font-bold text-gray-800">{meal.dishName}</p>
        <p className="text-sm text-gray-500 mt-2 mb-3">{meal.reasoning}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600">
            <span><strong className="font-medium">Calories:</strong> {meal.calories.toFixed(0)} kcal</span>
            <span><strong className="font-medium">Protein:</strong> {meal.protein.toFixed(1)}g</span>
            <span><strong className="font-medium">Carbs:</strong> {meal.carbs.toFixed(1)}g</span>
            <span><strong className="font-medium">Fats:</strong> {meal.fats.toFixed(1)}g</span>
        </div>
    </div>
);

const DailyPlanCard: React.FC<{ dailyPlan: DailyPlan }> = ({ dailyPlan }) => (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg mb-6">
        <div className="flex justify-between items-baseline mb-4">
            <h3 className="text-2xl font-bold text-primary">{dailyPlan.day}</h3>
            <div className="text-right">
                <p className="text-sm font-semibold text-gray-700">{dailyPlan.dailyTotals.calories.toFixed(0)} kcal</p>
                <p className="text-xs text-gray-500">Total for the day</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MealCard title="Breakfast" meal={dailyPlan.meals.breakfast} />
            <MealCard title="Lunch" meal={dailyPlan.meals.lunch} />
            <MealCard title="Dinner" meal={dailyPlan.meals.dinner} />
            <MealCard title="Snacks" meal={dailyPlan.meals.snacks} />
        </div>
    </div>
);

const DietPlanDisplay: React.FC<{ plan: DietPlan }> = ({ plan }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">{plan.title}</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{plan.introduction}</p>
            </div>

            <div>
                {plan.weeklyPlan.map((dailyPlan) => (
                    <DailyPlanCard key={dailyPlan.day} dailyPlan={dailyPlan} />
                ))}
            </div>

            <div className="mt-10 bg-primary/10 p-6 rounded-xl border border-primary/20">
                 <h2 className="text-2xl font-bold text-primary mb-3">Health Tips & Summary</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{plan.summary}</p>
            </div>
        </div>
    );
};

export default DietPlanDisplay;
