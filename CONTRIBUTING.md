# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/portfolio.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`
5. Start the development server: `npm run dev`

## Development Guidelines

### Code Style

- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages following conventional commits
- Use TypeScript for type safety

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── sections/      # Page sections
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── assets/        # Static assets
└── data/          # Static data files
```

### Testing

- Write tests for new components and functions
- Run tests before submitting: `npm run test`
- Maintain test coverage

### Commit Guidelines

We use conventional commits. Please format your commits as:

- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code refactoring`
- `test: add or update tests`
- `chore: maintenance tasks`

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Add tests for new functionality
3. Update documentation if needed
4. Submit a pull request with a clear description
5. Respond to feedback and make necessary changes

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information

## Questions?

Feel free to open an issue for any questions or clarifications.
