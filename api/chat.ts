import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Backend API Key is missing. Please configure GEMINI_API_KEY in Vercel.' });
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
}
