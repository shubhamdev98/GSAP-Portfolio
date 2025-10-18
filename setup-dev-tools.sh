#!/bin/bash

# Development Tools Setup Script
# This script sets up all the development tools for the project

echo "🚀 Setting up development tools..."

# Check if Node.js is installed
if ! command -v node >/dev/null 2>&1; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm >/dev/null 2>&1; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install Husky hooks
echo "🐕 Setting up Husky hooks..."
npm run prepare

# Make Husky hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
chmod +x .husky/pre-push

echo "✅ Husky hooks are set up and executable"

# Test ESLint
echo "🔍 Testing ESLint configuration..."
if npm run lint:check; then
    echo "✅ ESLint configuration is working"
else
    echo "⚠️  ESLint found some issues (this is normal for existing code)"
fi

# Test Prettier
echo "🎨 Testing Prettier configuration..."
if npm run format:check; then
    echo "✅ Prettier configuration is working"
else
    echo "⚠️  Prettier found some formatting issues (this is normal for existing code)"
fi

# Test commitlint
echo "📝 Testing commitlint configuration..."
echo "feat: test commit message" | npx commitlint
if [ $? -eq 0 ]; then
    echo "✅ Commitlint configuration is working"
else
    echo "❌ Commitlint configuration has issues"
fi

echo ""
echo "🎉 Development tools setup complete!"
echo ""
echo "📋 Available commands:"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production"
echo "  npm run lint         - Run ESLint"
echo "  npm run lint:fix     - Fix ESLint issues automatically"
echo "  npm run format       - Format code with Prettier"
echo "  npm run format:check - Check code formatting"
echo "  npm run type-check   - Run TypeScript type checking"
echo ""
echo "🔧 Git hooks are now active:"
echo "  - pre-commit: Runs lint-staged (ESLint + Prettier)"
echo "  - commit-msg: Validates commit messages"
echo "  - pre-push: Runs format check, lint, and build"
echo ""
echo "💡 Commit message format:"
echo "  feat: add new feature"
echo "  fix: fix bug"
echo "  docs: update documentation"
echo "  style: formatting changes"
echo "  refactor: code refactoring"
echo "  perf: performance improvements"
echo "  test: add or update tests"
echo "  chore: maintenance tasks"
echo "  ci: CI/CD changes"
echo "  build: build system changes"
echo "  revert: revert previous commit"
