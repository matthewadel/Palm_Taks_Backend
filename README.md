# Mood Insights API - TypeScript Node.js Backend

A robust and scalable TypeScript Node.js REST API for tracking mood insights, sleep patterns, and personal notes. Built with Express.js, featuring comprehensive middleware, error handling, and input validation.

## 🚀 Features

- **Mood Tracking**: Track daily moods with predefined mood options (Happy, Neutral, Sad)
- **Sleep Monitoring**: Log sleep hours with validation
- **Personal Notes**: Add optional notes with character limits
- **AI-Powered Insights**: Personalized health recommendations using OpenAI GPT-3.5
- **Request Validation**: Comprehensive input validation using Zod schemas
- **Rate Limiting**: Protection against abuse with configurable rate limits
- **Security**: HPP protection, CORS enabled, request compression
- **Error Handling**: Global error handling with custom error types
- **Type Safety**: Full TypeScript implementation with strict typing

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **AI Integration**: OpenAI API (GPT-3.5-turbo)
- **Validation**: Zod
- **Environment**: dotenv
- **Development**: Nodemon, ts-node
- **Code Quality**: ESLint, Prettier
- **Security**: hpp, cors, express-rate-limit, compression

## 📁 Project Structure

```
src/
├── index.ts                 # Application entry point
├── controllers/             # Request handlers
│   ├── index.ts
│   └── insights.controller.ts
├── middlewares/             # Custom middleware
│   ├── asyncWrapper.ts      # Async error handling
│   ├── globalErrorHandler.ts
│   ├── index.ts
│   └── validateRequestSchema.ts
├── routes/                  # API routes
│   ├── index.ts
│   └── insights.router.ts
├── schemas/                 # Zod validation schemas
│   ├── index.ts
│   └── insights.schema.ts
├── services/                # Business logic
│   ├── index.ts
│   └── insights.service.ts
└── utils/                   # Utility functions
    ├── errors.ts
    └── index.ts
```

## 🚦 API Endpoints

### Base URL: `http://localhost:5001/api`

#### GET `/insights`
Get available mood options
- **Response**: Array of mood objects with id, value, label, and emoji

#### POST `/insights`
Submit mood insights data and receive AI-powered personalized recommendations
- **Body**:
  ```json
  {
    "mood": 1,           // Required: Mood ID (1-3)
    "sleep": 8,          // Required: Sleep hours (0-12)
    "notes": "Good day"  // Optional: Notes (3-32 chars)
  }
  ```
- **Response**: AI-generated personalized health insights based on your inputs

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm
- OpenAI API Key (get from https://platform.openai.com/api-keys)

### Environment Setup

1. **Copy environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Add your OpenAI API key** to `.env`:
   ```bash
   OPENAI_API_KEY=your_actual_openai_api_key_here
   ```

### Install Dependencies

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install project dependencies
pnpm install
```

### Development Dependencies Setup
The project includes the following development tools:
```bash
pnpm add eslint prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
pnpm dev
```
This starts the server with hot reload using nodemon at `http://localhost:5001`

### Production Build
```bash
# Build the project
pnpm build

# Start the built application
pnpm start
```

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Compile TypeScript to JavaScript
- `pnpm start` - Run the compiled application
- `pnpm lint` - Run ESLint on TypeScript files
- `pnpm format` - Format code using Prettier

## 🛡️ Security Features

- **Rate Limiting**: 50 requests per 15 minutes per IP
- **HPP Protection**: HTTP Parameter Pollution protection
- **CORS**: Cross-Origin Resource Sharing enabled
- **Compression**: Response compression for better performance
- **Input Validation**: Strict validation using Zod schemas

## 🧪 Testing the API

### Using curl

Get mood options:
```bash
curl http://localhost:5001/api/insights
```

Submit mood data:
```bash
curl -X POST http://localhost:5001/api/insights \
  -H "Content-Type: application/json" \
  -d '{"mood": 1, "sleep": 8, "notes": "Feeling great today!"}'
```

### Example Responses

Mood options response:
```json
{
  "success": true,
  "data": [
    {"id": 1, "value": "happy", "label": "Happy", "emoji": "😊"},
    {"id": 2, "value": "neutral", "label": "Neutral", "emoji": "😐"},
    {"id": 3, "value": "sad", "label": "Sad", "emoji": "😢"}
  ]
}
```

Insights submission response:
```json
{
  "success": true,
  "data": {
    "message": "Based on your 8 hours of sleep and happy mood, you're doing great! Your sleep duration is excellent for recovery and cognitive function. To maintain this positive energy, consider a 15-minute walk in nature or some light stretching. Keep up the good work with your sleep routine!",
    "userInputs": {
      "sleep": 8,
      "mood": "happy",
      "notes": "Feeling great today!"
    }
  }
}
```

Error response (when AI is unavailable):
```json
{
  "success": true,
  "data": {
    "message": "Thanks for sharing your health data! Try to maintain a consistent sleep schedule and practice mindfulness for better wellbeing.",
    "userInputs": {
      "sleep": 8,
      "mood": "happy",
      "notes": "Feeling great today!"
    },
    "error": "AI service temporarily unavailable"
  }
}
```

## 🧠 AI-Powered Insights

The application integrates with OpenAI's GPT-3.5-turbo model to provide personalized health recommendations based on:

- **Sleep Duration**: Analyzes sleep patterns and provides sleep optimization tips
- **Mood State**: Considers emotional well-being in recommendations
- **Personal Notes**: Incorporates user's additional context for more targeted advice

### AI Features:
- Personalized health recommendations
- Sleep optimization suggestions
- Mood-based wellness tips
- Contextual advice based on user notes
- Fallback responses when AI service is unavailable

## 🏗️ Architecture

This project follows a clean, modular architecture:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and data processing
- **Middlewares**: Handle cross-cutting concerns (validation, error handling)
- **Schemas**: Define and validate data structures
- **Utils**: Shared utilities and custom error classes

## 📝 Configuration

The application is configured to run on port 5001. You can modify this in `src/index.ts`:

```typescript
const PORT = 5001;
```

## 🤝 Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Add proper TypeScript types
3. Include appropriate error handling
4. Test your changes

## 📄 License

ISC
