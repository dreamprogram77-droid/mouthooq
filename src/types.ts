export type UserRole = 'user' | 'admin' | 'guardian';

export interface UserProfile {
  uid: string;
  fullName: string;
  gender: 'male' | 'female';
  age: number;
  location: string;
  education: string;
  profession: string;
  bio: string;
  lifestyle: {
    prayerFrequency: string;
    dietaryRequirements: string;
    smoking: boolean;
    hobbies: string[];
  };
  social: {
    familyValues: string;
    marriageExpectations: string;
  };
  privacySettings: {
    hidePhoto: boolean;
    hideName: boolean;
  };
  hasGuardian: boolean;
  guardianId?: string;
  isVerified: boolean;
  assessmentCompleted: boolean;
}

export interface AssessmentResult {
  uid: string;
  personalityType: string;
  valuesScore: number;
  readinessScore: number;
  analysis: string;
  completedAt: string;
}

export interface Match {
  id: string;
  user1Id: string;
  user2Id: string;
  compatibilityScore: number;
  reasoning: string;
  status: 'suggested' | 'pending_approval' | 'approved' | 'rejected';
  createdAt: string;
}

export interface InteractionRequest {
  id: string;
  senderId: string;
  receiverId: string;
  guardianId?: string;
  status: 'pending_guardian' | 'pending_receiver' | 'approved' | 'rejected';
  message?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: string;
  isModerated: boolean;
}
