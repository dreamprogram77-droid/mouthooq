import { BookOpen, MessageCircle, Users, Wallet, Globe, CheckCircle2, PlayCircle, Award } from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface EducationModule {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
  content: string;
  quiz: QuizQuestion[];
}

export const EDUCATION_MODULES: EducationModule[] = [
  {
    id: "communication",
    title: "Effective Communication",
    description: "Learn the art of active listening and respectful expression in a marital context.",
    icon: MessageCircle,
    duration: "45 mins",
    content: `
# Effective Communication in Marriage

Communication is the lifeblood of a healthy marriage. It's not just about talking; it's about understanding and being understood.

## 1. Active Listening
Active listening involves fully concentrating on what is being said rather than just passively 'hearing' the message of the speaker.
- Maintain eye contact.
- Avoid interrupting.
- Reflect back what you heard to ensure accuracy.

## 2. "I" Statements
Instead of saying "You always make me angry," try "I feel frustrated when..." This reduces defensiveness and focuses on your feelings.

## 3. The 24-Hour Rule
If a discussion becomes too heated, agree to take a break and revisit the topic within 24 hours. This prevents saying things you might regret.
    `,
    quiz: [
      {
        id: "q1",
        question: "What is the primary goal of active listening?",
        options: ["To win the argument", "To understand the speaker's perspective", "To wait for your turn to speak", "To point out flaws in logic"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "personality",
    title: "Understanding Personalities",
    description: "Explore how different personality types interact and how to bridge the gaps.",
    icon: Users,
    duration: "30 mins",
    content: `
# Understanding Personality Types

Every individual brings a unique personality to a marriage. Understanding these differences is key to harmony.

## 1. Introversion vs. Extroversion
One partner may recharge by being alone, while the other recharges by being around people. Respecting these needs prevents burnout.

## 2. Analytical vs. Emotional
Some people process information through logic, while others process through feelings. Both are valid and necessary.

## 3. Love Languages
Understanding how your partner prefers to give and receive love (Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, Physical Touch).
    `,
    quiz: [
      {
        id: "q1",
        question: "Which of these is NOT one of the five love languages?",
        options: ["Quality Time", "Financial Support", "Acts of Service", "Words of Affirmation"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "finance",
    title: "Financial Planning",
    description: "Building a shared financial vision and managing resources together.",
    icon: Wallet,
    duration: "60 mins",
    content: `
# Financial Planning for Couples

Money is one of the most common sources of conflict in marriage. Early alignment is crucial.

## 1. Shared Goals
Discuss long-term goals: owning a home, education for children, retirement, and charitable giving (Zakat/Sadaqah).

## 2. Budgeting Together
Create a monthly budget that accounts for all expenses and savings. Transparency is the foundation of trust.

## 3. Debt Management
Be honest about existing debts and create a plan to manage them together.
    `,
    quiz: [
      {
        id: "q1",
        question: "What is the most important factor in marital financial planning?",
        options: ["Having the most money", "Transparency and shared goals", "Keeping separate accounts only", "Avoiding all spending"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "culture",
    title: "Cultural Expectations",
    description: "Navigating family traditions, roles, and societal expectations respectfully.",
    icon: Globe,
    duration: "40 mins",
    content: `
# Cultural Expectations in Marriage

Marriage often involves the union of two families and their respective cultures.

## 1. Family Boundaries
Discuss how much influence extended family will have on your daily lives and decision-making.

## 2. Traditional Roles
Clarify expectations regarding household responsibilities, career paths, and child-rearing.

## 3. Celebrating Traditions
Decide which cultural traditions are important to keep and how to blend them if you come from different backgrounds.
    `,
    quiz: [
      {
        id: "q1",
        question: "Why is it important to discuss family boundaries early?",
        options: ["To exclude all family", "To ensure the couple's autonomy is respected", "To decide who is the favorite", "To avoid visiting relatives"],
        correctAnswer: 1
      }
    ]
  }
];
