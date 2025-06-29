import { z } from "zod";
import OpenAI from "openai";
import { insightsSchema } from "../schemas";

type handleInsightsBody = z.infer<typeof insightsSchema.handleInsightsSchema>['body'];
export class InsightsService {
    private openai: OpenAI;
    private moods = [
        {
            id: 1,
            value: 'happy',
            label: 'Happy',
            emoji: '😊',
        },
        {
            id: 2,
            value: 'neutral',
            label: 'Neutral',
            emoji: '😐',
        },
        {
            id: 3,
            value: 'sad',
            label: 'Sad',
            emoji: '😢',
        },
    ];

    constructor() {
        // Initialize OpenAI client - you'll need to set OPENAI_API_KEY environment variable
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    getMoods = () => {
        return this.moods

    }

    handleInsights = async (body: handleInsightsBody) => {
        console.log('body', body);

        try {

            const moodDescription = this.moods.find(mood => mood.id === body.mood)?.value || 'unknown';

            // Create a prompt for the AI based on user inputs
            const prompt = this._createHealthInsightPrompt(body.sleep, moodDescription, body.notes);

            // Get AI-generated insights
            const aiInsight = await this._getAIInsight(prompt);

            return {
                message: aiInsight,
            };
        } catch (error) {
            console.error('Error generating AI insights:', error);
            // Fallback to a default message if AI fails
            return {
                message: "Thanks for sharing your health data! Try to maintain a consistent sleep schedule and practice mindfulness for better wellbeing.",
                error: 'AI service temporarily unavailable'
            };
        }
    }

    private _createHealthInsightPrompt(sleepHours: number, mood: string, notes?: string): string {
        let prompt = `As a health and wellness expert, provide a personalized insight and recommendation based on the following user data:

Sleep: ${sleepHours} hours
Current mood: ${mood}`;

        if (notes) {
            prompt += `
Additional notes: ${notes}`;
        }

        prompt += `

Please provide:
1. A brief analysis of their current health indicators
2. One specific, actionable recommendation
3. Keep the response encouraging and under 100 words

Focus on practical advice for improving sleep, mood, or overall wellness.`;

        return prompt;
    }

    private async _getAIInsight(prompt: string): Promise<string> {
        const completion = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful health and wellness advisor. Provide concise, practical, and encouraging health advice."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 150,
            temperature: 0.7,
        });

        return completion.choices[0]?.message?.content || "Stay healthy and keep tracking your wellness journey!";
    }
}
