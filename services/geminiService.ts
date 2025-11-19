import { GoogleGenAI } from "@google/genai";
import { GEMINI_SYSTEM_PROMPT } from '../constants';

// Initialize the client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm currently in demo mode (API Key missing). I can tell you that Amal is a GenAI Specialist!";
    }

    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_PROMPT,
      },
      // Convert simple history to the format Gemini expects if needed, 
      // but for simple request/response we can just use history prop if we were maintaining state there.
      // Here we will just send the message with the system prompt configured.
    });

    // Since the SDK handles history in a session object, if we wanted to restore previous turn history:
    // This simple implementation assumes a fresh context or linear chat. 
    // To keep it simple and robust for this demo, we rely on the system prompt and current message 
    // primarily, or we could reconstruct the history object.
    
    // For this specific "Portfolio Chat", single-turn or short-memory is often sufficient 
    // given the context is injected via System Instruction. 
    
    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I didn't get a response, but I'm thinking about it.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the neural network right now. Please try again later.";
  }
};