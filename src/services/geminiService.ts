import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateChatResponse(
  prompt: string,
  model: string = "gemini-3-flash-preview",
  systemInstructions: string = ""
) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstructions,
      },
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error generating chat response:", error);
    throw error;
  }
}
