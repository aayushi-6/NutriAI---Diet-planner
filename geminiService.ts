import { GoogleGenAI, Type } from "@google/genai";
import type { UserInput, DietPlan } from '../types';
import { FOOD_DATA_CONTEXT } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const dietPlanSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the diet plan." },
    introduction: { type: Type.STRING, description: "A brief, encouraging introduction for the user." },
    weeklyPlan: {
      type: Type.ARRAY,
      description: "An array of daily meal plans for 7 days.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.STRING, description: "The day of the week (e.g., 'Monday')." },
          meals: {
            type: Type.OBJECT,
            properties: {
              breakfast: {
                type: Type.OBJECT,
                properties: {
                  dishName: { type: Type.STRING },
                  calories: { type: Type.NUMBER },
                  protein: { type: Type.NUMBER },
                  carbs: { type: Type.NUMBER },
                  fats: { type: Type.NUMBER },
                  reasoning: { type: Type.STRING, description: "Why this meal is suitable." }
                },
                required: ["dishName", "calories", "protein", "carbs", "fats", "reasoning"]
              },
              lunch: {
                type: Type.OBJECT,
                properties: {
                  dishName: { type: Type.STRING },
                  calories: { type: Type.NUMBER },
                  protein: { type: Type.NUMBER },
                  carbs: { type: Type.NUMBER },
                  fats: { type: Type.NUMBER },
                  reasoning: { type: Type.STRING, description: "Why this meal is suitable." }
                },
                required: ["dishName", "calories", "protein", "carbs", "fats", "reasoning"]
              },
              dinner: {
                type: Type.OBJECT,
                properties: {
                  dishName: { type: Type.STRING },
                  calories: { type: Type.NUMBER },
                  protein: { type: Type.NUMBER },
                  carbs: { type: Type.NUMBER },
                  fats: { type: Type.NUMBER },
                  reasoning: { type: Type.STRING, description: "Why this meal is suitable." }
                },
                required: ["dishName", "calories", "protein", "carbs", "fats", "reasoning"]
              },
              snacks: {
                type: Type.OBJECT,
                properties: {
                  dishName: { type: Type.STRING },
                  calories: { type: Type.NUMBER },
                  protein: { type: Type.NUMBER },
                  carbs: { type: Type.NUMBER },
                  fats: { type: Type.NUMBER },
                  reasoning: { type: Type.STRING, description: "Why this meal is suitable." }
                },
                required: ["dishName", "calories", "protein", "carbs", "fats", "reasoning"]
              },
            },
            required: ["breakfast", "lunch", "dinner", "snacks"]
          },
          dailyTotals: {
            type: Type.OBJECT,
            properties: {
              calories: { type: Type.NUMBER },
              protein: { type: Type.NUMBER },
              carbs: { type: Type.NUMBER },
              fats: { type: Type.NUMBER }
            },
            required: ["calories", "protein", "carbs", "fats"]
          },
        },
        required: ["day", "meals", "dailyTotals"]
      },
    },
    summary: { type: Type.STRING, description: "A concluding summary with general health tips." },
  },
  required: ["title", "introduction", "weeklyPlan", "summary"],
};

const buildPrompt = (userInput: UserInput): string => {
  return `
    You are an expert nutritionist specializing in Indian cuisine. Your task is to create a personalized 7-day diet plan for a user based on their specific details and goals.

    **User Details:**
    - Name: ${userInput.name}
    - Age: ${userInput.age} years
    - Height: ${userInput.height} cm
    - Weight: ${userInput.weight} kg
    - Goal: ${userInput.goal}
    - Dietary Preference: ${userInput.preference}
    - Allergies: ${userInput.allergies || 'None specified'}
    - Desired Duration to see effects: ${userInput.duration} weeks

    **Instructions:**
    1.  Analyze the user's data to determine their approximate daily caloric and macronutrient needs to achieve their goal of "${userInput.goal}".
    2.  Use the provided context of Indian food items to create a diverse and balanced 7-day meal plan.
    3.  Ensure the plan aligns with the user's dietary preference (${userInput.preference}). If 'Non-Vegetarian' is chosen, include a mix of veg and non-veg options. If 'Vegetarian', strictly use vegetarian dishes.
    4.  Avoid any ingredients the user is allergic to (${userInput.allergies}).
    5.  For each meal, provide the dish name, estimated calories, protein, carbs, and fats. Also, add a brief 'reasoning' explaining why the meal is a good choice.
    6.  Calculate the total daily calories and macros for each day.
    7.  The entire response must be a single, valid JSON object that adheres to the provided schema. Do not include any markdown formatting or explanatory text outside of the JSON structure.

    ${FOOD_DATA_CONTEXT}
  `;
};

export const generateDietPlan = async (userInput: UserInput): Promise<DietPlan> => {
  const prompt = buildPrompt(userInput);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: dietPlanSchema,
      },
    });

    const jsonText = response.text.trim();
    const dietPlan: DietPlan = JSON.parse(jsonText);
    return dietPlan;
  } catch (error) {
    console.error("Error generating diet plan:", error);
    if (error instanceof Error && error.message.includes("SAFETY")) {
        throw new Error("The request was blocked due to safety settings. Please modify your input and try again.");
    }
    throw new Error("Failed to generate diet plan. The model may be overloaded or the input is invalid.");
  }
};