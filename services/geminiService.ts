
import { GoogleGenAI } from "@google/genai";

// Always use the process.env.API_KEY string directly for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getExpertAdvice(query: string) {
  try {
    // Calling ai.models.generateContent directly with model name and prompt
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User asks: ${query}. You are ARKIVE AI Assistant. ARKIVE provides technical services like pergolas, carports, welding, plumbing, glass installation, and maintenance (AMC). Provide a concise, professional technical recommendation.`,
      config: {
        maxOutputTokens: 250,
        temperature: 0.7,
      }
    });
    // Extracting text output via the .text property
    return response.text || "I'm sorry, I couldn't process that request right now. Please contact our support team.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our expert system is currently undergoing maintenance. How else can I assist you?";
  }
}
