# Mood Insights API - TypeScript Node.js Backend

A robust and scalable TypeScript Node.js REST API for tracking mood insights, sleep patterns, and personal notes. Built with Express.js, featuring comprehensive middleware, error handling, and input validation.

## Setup Instructions

1. **Prerequisites**:
  - Node.js (v16 or higher)
  - pnpm (recommended) or npm
  

2. **Clone the repository:**
   ```sh
   git clone https://github.com/matthewadel/Palm_Taks_Backend
   cd Palm_Taks_Backend
   ```
3. **Install dependencies:**: use your favorite package manager to install the app deps, but I personally prefer using pnpm
   ```sh
   pnpm install
   ```
4. **Run the development environemnt:**: the app runs on port 5001, so make sure there is no other service or app running on the same port
    ```sh
    pnpm dev
    ```

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Validation:** Zod
- **AI Integration:** OpenAI API (`openai`)
- **Environment Variables:** dotenv
- **Development Tools:** Nodemon, ts-node
- **Code Quality:** ESLint, Prettier
- **Security:** hpp, cors, express-rate-limit, compression
- **Package Manager:** pnpm (recommended) or npm
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


## Implementation Approach

This project follows the **MVCS (Model-View-Controller-Service)** architecture, which promotes separation of concerns and maintainability. Here’s how each part is structured and the purpose of the main files:

### Project Structure & File Purposes

- **src/index.ts**: Application entry point. Sets up the Express app, middleware, routes, and error handling.

- **controllers/**: Handle HTTP requests and responses. Controllers receive input from routes, call the appropriate service, and return the response.

- **middlewares/**: Contains reusable middleware for request validation, error handling, and async error wrapping.

- **routes/**: Defines API endpoints and maps them to controller methods. and by the way i have one entity (insights) and i followed the standard pattern to get and post request on this entity

- **schemas/**: Zod schemas for validating and typing request data.

- **services/**: handles Business logic, connects with DB and integrates with third-party APIs (like OpenAI). Services are called by controllers.

This structure ensures that:
- **Controllers** are thin and only coordinate between HTTP and business logic.
- **Services** encapsulate all business logic and external integrations.
- **Middlewares** handle cross-cutting concerns like validation and error handling.
- **Schemas** provide strong typing and validation for all incoming data.
- **Utils** provide shared helpers and error types.

This approach makes the codebase modular, testable, and easy to extend.


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


## 🛡️ Security Features

- **Rate Limiting**: 50 requests per 15 minutes per IP
- **HPP Protection**: HTTP Parameter Pollution protection to avoid sending the same parameter many times which may lead to unexpected behavior
- **CORS**: Cross-Origin Resource Sharing enabled
- **Compression**: Response compression for better performance
- **Input Validation**: Strict validation using Zod schemas

## 📄 License

ISC