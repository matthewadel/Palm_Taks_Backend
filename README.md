# Mood Insights API - TypeScript Node.js Backend

A robust and scalable TypeScript Node.js REST API for tracking mood insights, sleep patterns, and personal notes. Built with Express.js, featuring comprehensive middleware, error handling, and input validation.

## 🚀 Features

- **Mood Tracking**: Track daily moods with predefined mood options (Happy, Neutral, Sad)
- **Sleep Monitoring**: Log sleep hours with validation
- **Personal Notes**: Add optional notes with character limits
- **Request Validation**: Comprehensive input validation using Zod schemas
- **Rate Limiting**: Protection against abuse with configurable rate limits
- **Security**: HPP protection, CORS enabled, request compression
- **Error Handling**: Global error handling with custom error types
- **Type Safety**: Full TypeScript implementation with strict typing

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod
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
Submit mood insights data
- **Body**:
  ```json
  {
    "mood": 1,           // Required: Mood ID (1-3)
    "sleep": 8,          // Required: Sleep hours (0-12)
    "notes": "Good day"  // Optional: Notes (3-32 chars)
  }
  ```
- **Response**: Success message with personalized recommendations

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Install Dependencies

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install project dependencies
pnpm install
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
    "message": "Success! Try meditating for 10 minutes today"
  }
}
```

## 🏗️ Architecture

This project follows a clean, modular architecture:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and data processing
- **Middlewares**: Handle cross-cutting concerns (validation, error handling)
- **Routing**: Handle app routes
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