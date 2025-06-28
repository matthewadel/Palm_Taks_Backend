import { z } from "zod";
import { insightsSchema } from "../schemas";
type handleInsightsBody = z.infer<typeof insightsSchema.handleInsightsSchema>['body'];
export class InsightsService {

    getMoods = () => {
        const moods = [
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
        return moods

    }

    handleInsights = (body: handleInsightsBody) => {
        console.log('body', body)
        return {
            message: "Success! Try meditating for 10 minutes today"
        }
    }
}
