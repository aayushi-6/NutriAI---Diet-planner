
export enum DietGoal {
    WEIGHT_LOSS = 'Weight Loss',
    WEIGHT_GAIN = 'Weight Gain',
    MAINTENANCE = 'Maintenance',
}

export enum DietaryPreference {
    VEG = 'Vegetarian',
    NON_VEG = 'Non-Vegetarian',
    ANY = 'Any',
}

export interface UserInput {
    name: string;
    age: number;
    height: number; // in cm
    weight: number; // in kg
    goal: DietGoal;
    preference: DietaryPreference;
    allergies: string;
    duration: number; // in weeks
}

export interface Meal {
    dishName: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    reasoning: string;
}

export interface DailyPlan {
    day: string;
    meals: {
        breakfast: Meal;
        lunch: Meal;
        dinner: Meal;
        snacks: Meal;
    };
    dailyTotals: {
        calories: number;
        protein: number;
        carbs: number;
        fats: number;
    };
}

export interface DietPlan {
    title: string;
    introduction: string;
    weeklyPlan: DailyPlan[];
    summary: string;
}
