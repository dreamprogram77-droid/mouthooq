import { GoogleGenAI } from "@google/genai";
import { UserProfile, AssessmentResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const geminiService = {
  async analyzeAssessment(profile: UserProfile, answers: any) {
    const prompt = `
      Analyze the following marriage readiness and personality assessment for a user:
      Profile: ${JSON.stringify(profile)}
      Answers: ${JSON.stringify(answers)}
      
      Provide a structured analysis including:
      1. Personality Type (in the context of marriage)
      2. Values Alignment
      3. Marriage Readiness Score (0-100)
      4. A brief summary of their strengths and areas for growth in a relationship.
      
      Tone: Formal, respectful, and encouraging.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  },

  async explainCompatibility(user1: UserProfile, user2: UserProfile, assessment1: AssessmentResult, assessment2: AssessmentResult) {
    const prompt = `
      Explain the compatibility between these two individuals for marriage:
      User 1: ${JSON.stringify(user1)} (Assessment: ${JSON.stringify(assessment1)})
      User 2: ${JSON.stringify(user2)} (Assessment: ${JSON.stringify(assessment2)})
      
      Analyze:
      1. Shared values and lifestyle alignment.
      2. Complementary personality traits.
      3. Potential challenges and how they might navigate them.
      4. Overall compatibility score (0-100).
      
      Tone: Professional, objective, and respectful. Focus on long-term marriage stability.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  },

  async getMatchmakerAdvice(query: string, userProfile: UserProfile) {
    const prompt = `
      You are a Smart Digital Matchmaker Assistant for a serious marriage platform named "Mithaq".
      User Profile: ${JSON.stringify(userProfile)}
      User Query: "${query}"
      
      Guidelines:
      - Maintain a formal, respectful, and supportive tone.
      - Focus on marriage, not dating.
      - Prioritize privacy and values.
      - Provide actionable advice based on the user's profile and assessment.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  }
};
