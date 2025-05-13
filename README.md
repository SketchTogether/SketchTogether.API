# SketchTogether API

A NestJS-based API for the SketchTogether application.

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Installation

1. Install pnpm globally (if not already installed):
```bash
npm install -g pnpm
```

2. Clone the repository:
```bash
git clone <your-repository-url>
cd SketchTogether.API
```

3. Install dependencies:
```bash
pnpm install
```

4. Start the development server:
```bash
pnpm start:dev
```

## Available Scripts

- `pnpm start` - Start the application
- `pnpm start:dev` - Start the application in development mode with hot-reload
- `pnpm build` - Build the application
- `pnpm test` - Run tests
- `pnpm lint` - Run linting

## Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
└── ...                  # Other source files
```

## Development

The project uses:
- NestJS for the backend framework
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Jest for testing

## License

UNLICENSED
