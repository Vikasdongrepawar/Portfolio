# Vikas Dongre - Developer Portfolio   live -demo link - "https://portfolio-vikas-lake.vercel.app/
"

A modern, high-performance personal portfolio website built with React, Vite, and Tailwind CSS. It showcases my projects, services, and includes an interactive AI assistant powered by the Google Gemini API.

## 🚀 Features

- **Dynamic Animations**: Smooth page transitions and scroll animations powered by `motion/react`.
- **Responsive Design**: Fully responsive layout tailored for mobile, tablet, and desktop devices.
- **AI Assistant Bot**: An integrated chatbot powered by the Google GenAI SDK to answer questions about my work and experience.
- **Modern Tech Stack**: Built with React 19, React Router, Tailwind CSS 4, and TypeScript for a robust and maintainable codebase.
- **Sleek UI/UX**: Dark mode aesthetic with premium, glassmorphism-inspired design elements.

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Animations**: [Motion](https://motion.dev/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai)
- **Icons**: Material Symbols & [Lucide React](https://lucide.dev/)

## 📦 Running Locally

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- A Google Gemini API Key (for the AI Bot functionality)

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Ensure you have your Gemini API key set up in your environment variables (e.g., in a `.env.local` or `.env` file depending on your setup) for the AI chatbot to function properly.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Navigate to the local URL provided by Vite in your terminal (usually `http://localhost:3000` or `http://localhost:5173`) to view the application.

## 📁 Project Structure

- `src/components/`: Reusable React components (Navbar, Hero, About, Projects, etc.)
- `src/constants.ts`: Site data (project details, services info)
- `src/App.tsx`: Main application routing and layout
- `src/index.css`: Global styles and custom Tailwind configuration
