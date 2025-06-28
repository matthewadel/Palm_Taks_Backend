export class InsightsService {

    getMoods = () => {
        const moods = [
            {
                value: 'happy',
                label: 'Happy',
                emoji: '😊',
            },
            {
                value: 'neutral',
                label: 'Neutral',
                emoji: '😐',
            },
            {
                value: 'sad',
                label: 'Sad',
                emoji: '😢',
            },
        ];
        return moods

    }
}
