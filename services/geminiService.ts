
import { GoogleGenAI, Type } from "@google/genai";
import { AdvisorResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCareerAdvice = async (interest: string, experience: string): Promise<AdvisorResponse> => {
  const prompt = `As a professional 3D industry mentor, provide career advice for a student interested in: "${interest}". 
  Their current experience level is: "${experience}".
  
  Format the response as JSON.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          careerPath: { type: Type.STRING, description: "The specific industry role recommended." },
          suggestedCourses: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "List of general course topics recommended." 
          },
          toolsToLearn: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Software tools like Blender, Maya, Houdini, etc." 
          },
          reasoning: { type: Type.STRING, description: "Why this path fits the student's interest." }
        },
        required: ["careerPath", "suggestedCourses", "toolsToLearn", "reasoning"]
      }
    }
  });

  return JSON.parse(response.text || '{}') as AdvisorResponse;
};
