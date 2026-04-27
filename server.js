import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Parse JSON bodies
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Backend API Key is missing. Please check your .env file.' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        { role: "user", parts: [{ text: prompt }] }
      ],
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: error.message || "Unknown error occurred on the backend" });
  }
});

app.listen(port, () => {
  console.log(`Backend Express server running on http://localhost:${port}`);
});
