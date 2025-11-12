
import { DietGoal, DietaryPreference } from './types';

export const DIET_GOALS: DietGoal[] = [
    DietGoal.WEIGHT_LOSS,
    DietGoal.WEIGHT_GAIN,
    DietGoal.MAINTENANCE,
];

export const DIETARY_PREFERENCES: DietaryPreference[] = [
    DietaryPreference.VEG,
    DietaryPreference.NON_VEG,
    DietaryPreference.ANY,
];

export const FOOD_DATA_CONTEXT = `
You have access to a dataset of Indian food items with the following nutritional information.
Here is a small, representative sample of the dataset structure and content:

"Dish Name","Calories (kcal)","Carbohydrates (g)","Protein (g)","Fats (g)"
"Hot tea (Garam Chai)",16.14,2.58,0.39,0.53
"Banana milkshake (Kele milkshake)",65.31,9.15,1.84,2.37
"Cheese and chilli sandwich ",218.11,27.4,6.8,9.78
"Egg sandwich (Ande ka sandwich)",285.96,29.16,8.69,15.8
"Chicken sandwich",253.27,25.38,13.12,11.75
"Boiled egg (Ubla anda)",45.35,0.12,4.43,3.04
"Plain omelette/omlet",272.41,0.64,9.66,25.74
"Chapati/Roti",202.31,35.65,5.88,3.56
"Potato parantha/paratha (Aloo ka parantha/paratha)",205.04,23.92,3.7,10.22
"Paneer parantha/paratha",262.97,24.33,7.98,14.62
"Boiled rice (Uble chawal)",117.19,25.72,2.6,0.18
"Mixed vegetable pulao",113.05,17.49,2.72,3.33
"Mutton biryani/biriyani",190.76,22.5,7.38,7.72
"Vegetable biryani/biriyani",174.61,18.56,3.16,9.51
"Washed moong dal (Dhuli moong ki dal)",50.0,5.91,2.68,1.68
"Mixed dal",61.93,5.79,2.51,3.1
"Black channa curry/Bengal gram curry (Kale chane ki curry)",140.68,14.11,5.67,6.61
"Potato cauliflower (Aloo gobhi)",106.18,5.99,1.9,8.13
"Spinach paneer (Palak paneer)",77.68,4.43,4.03,4.76
"Chicken curry",129.22,3.38,11.79,7.57
"Tandoori chicken",145.2,2.34,16.26,7.93
"Fish curry (Machli curry)",111.13,3.77,8.76,6.69
"Sprouted moong salad ",37.81,5.48,2.29,0.74
"Fruit salad (Phalon ka salaad)",78.14,15.96,0.91,1.22
"Rice kheer (Chawal ki kheer)",75.03,10.05,2.3,2.97
"Carrot halwa (Gajar ka halwa)",172.64,18.53,3.11,9.73

Use this context to select appropriate Indian dishes for the user's diet plan.
`;
