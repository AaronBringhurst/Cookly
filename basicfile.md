Cookly/
│
├── server/                  # Main server files
│   ├── index.ts             # Entry point for the server
│   ├── routes/              # Routes for handling API endpoints
│   │   ├── authRoutes.ts    # Routes for user authentication
│   │   ├── recipeRoutes.ts  # Routes for recipe operations (CRUD)
│   │   └── index.ts         # Centralized route exports
│   ├── controllers/         # Business logic for handling requests
│   │   ├── authController.ts # Logic for login, registration, etc.
│   │   ├── recipeController.ts # Logic for recipe CRUD
│   │   └── userController.ts  # Logic for user management
│   ├── models/              # Data models (using Mongoose)
│   │   ├── User.ts          # User schema
│   │   ├── Recipe.ts        # Recipe schema
│   │   └── index.ts         # Centralized model exports
│   ├── middleware/          # Custom middleware (e.g., auth checks)
│   │   └── authMiddleware.ts # Middleware for protecting routes
│   ├── utils/               # Utility functions (e.g., token handling)
│   │   └── generateToken.ts # Function for generating JWT tokens
│   ├── config/              # Configuration files
│   │   └── db.ts            # Database connection setup
│   └── .env                 # Environment variables (e.g., DB URI, JWT secret)
│
├── client/                  # Frontend files (React + TypeScript)
│   ├── src/                 # Source files for React app
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Main pages (e.g., login, dashboard)
│   │   ├── App.tsx          # Main app component
│   │   ├── index.tsx        # React entry point
│   │   ├── services/        # API service functions using Axios
│   │   │   ├── authService.ts  # Functions for login, registration, etc.
│   │   │   └── recipeService.ts # Functions for interacting with recipe API
│   │   ├── context/         # Context API for global state (e.g., auth state)
│   │   └── types/           # TypeScript types for better type safety
│   └── public/              # Static assets
│
├── package.json             # Dependencies and scripts for the project
├── tsconfig.json            # TypeScript configuration for both client and server
├── .gitignore               # Files and directories to ignore in Git
└── README.md                # Documentation for the project
