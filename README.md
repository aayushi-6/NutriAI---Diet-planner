# 🧩 NutriAI — AI-Powered 7-Day Indian Diet Planner  

**NutriAI** is a modern, responsive web application that uses **Google’s Gemini API** to generate **personalized 7-day diet plans** tailored to Indian cuisine.  
It combines a sleek **React + TypeScript** frontend with a secure **Python (Flask/FastAPI)** backend to deliver accurate, balanced, and goal-driven meal recommendations.

---

## 🚀 Overview  

NutriAI helps users design nutrition plans aligned with their body metrics, fitness goals, and dietary preferences.  
The app uses Gemini AI to craft healthy and diverse weekly meal plans, accounting for allergies and cultural food habits.

---

## 🏗️ Architecture  

NutriAI follows a modern **client-server** architecture:

| Layer | Description |
|--------|-------------|
| **Frontend (Client)** | Built with **React, TypeScript, and Tailwind CSS**. Collects user details, preferences, and goals, then displays the AI-generated plan beautifully. |
| **Backend (Server)** | A **Python Flask/FastAPI** service that securely manages the Gemini API key, processes user inputs, and generates AI-driven meal plans via the **Google Gemini API**. |

---

## ⚙️ Features  

✅ **Secure API Key Management** – Gemini API key stored safely on backend only.  
👤 **Personalized Inputs** – Accepts user data like age, height, weight, and goals.  
🥗 **Allergy-Aware Diets** – Avoids allergenic food items automatically.  
🤖 **AI-Generated Plans** – Uses Google Gemini to create a 7-day Indian diet plan.  
📄 **Structured Output** – Ensures consistent, validated JSON data.  
📱 **Responsive UI** – Clean mobile-first interface using Tailwind CSS.  

---

## 🧠 Tech Stack  

| Component | Technology |
|------------|-------------|
| **Frontend** | React, TypeScript, Tailwind CSS, Vite |
| **Backend** | Python, Flask (or FastAPI), Google Gemini API |
| **Environment** | Node.js, pip, .env for secure key management |

---

## 🧩 API Workflow  

1️⃣ **Frontend collects** user details and goals.  
2️⃣ **Sends a POST request** to `http://localhost:5000/api/generate-plan`.  
3️⃣ **Backend builds** a structured AI prompt using user data and Indian food dataset.  
4️⃣ **Gemini API generates** a complete 7-day diet plan.  
5️⃣ **Backend returns structured JSON**, which frontend displays as a weekly table.

---

## 🛠️ Setup Instructions  

### 🔹 Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- Google Gemini API Key (Get from [Google AI Studio](https://aistudio.google.com/))

---

## 🧩 API Workflow  

1️⃣ **Frontend collects** user details and goals.  
2️⃣ **Sends a POST request** to `http://localhost:5000/api/generate-plan`.  
3️⃣ **Backend builds** a structured AI prompt using user data and Indian food dataset.  
4️⃣ **Gemini API generates** a complete 7-day diet plan.  
5️⃣ **Backend returns structured JSON**, which the frontend displays as a weekly table.  

---

## ⚠️ Disclaimer  

> This application is for **informational and educational purposes only**.  
> It is **not a substitute for professional medical or dietary advice**.  
> Always consult a certified nutritionist or healthcare professional before making major dietary changes.  

---

## ✨ Team Members

**Aayushi Soni - IAR/12981**  
**Ishitaba Umat - IAR/13005**
 
 
