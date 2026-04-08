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
      You are a Smart Digital Matchmaker Assistant for "Mithaq".
      Provide a detailed compatibility breakdown between these two individuals for marriage:
      
      User 1 Profile: ${JSON.stringify(user1)}
      User 1 Assessment: ${JSON.stringify(assessment1)}
      
      User 2 Profile: ${JSON.stringify(user2)}
      User 2 Assessment: ${JSON.stringify(assessment2)}
      
      Structure your response with the following sections:
      
      ### 1. Values & Lifestyle Alignment
      Compare their religious practices, family goals, and daily habits. Reference specific assessment answers.
      
      ### 2. Personality Synergy
      Analyze how their personality types complement each other. Highlight strengths of their combined dynamic.
      
      ### 3. Areas for Communication
      Identify potential differences or challenges (e.g., conflict resolution styles, financial views) and suggest how they can navigate them respectfully.
      
      ### 4. Matchmaker's Conclusion
      A final summary of why this match is suggested and an overall compatibility score (0-100).
      
      Tone: Professional, respectful, clear, and focused on long-term marital stability. Use Markdown for formatting.
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
