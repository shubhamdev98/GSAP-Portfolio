@echo off
REM Development Tools Setup Script for Windows
REM This script sets up all the development tools for the project

echo 🚀 Setting up development tools...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    exit /b 1
)

echo ✅ Node.js and npm are available

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Install Husky hooks
echo 🐕 Setting up Husky hooks...
npm run prepare

echo ✅ Husky hooks are set up

REM Test ESLint
echo 🔍 Testing ESLint configuration...
npm run lint:check
if %errorlevel% equ 0 (
    echo ✅ ESLint configuration is working
) else (
    echo ⚠️  ESLint found some issues (this is normal for existing code)
)

REM Test Prettier
echo 🎨 Testing Prettier configuration...
npm run format:check
if %errorlevel% equ 0 (
    echo ✅ Prettier configuration is working
) else (
    echo ⚠️  Prettier found some formatting issues (this is normal for existing code)
)

REM Test commitlint
echo 📝 Testing commitlint configuration...
echo feat: test commit message | npx commitlint
if %errorlevel% equ 0 (
    echo ✅ Commitlint configuration is working
) else (
    echo ❌ Commitlint configuration has issues
)

echo.
echo 🎉 Development tools setup complete!
echo.
echo 📋 Available commands:
echo   npm run dev          - Start development server
echo   npm run build        - Build for production
echo   npm run lint         - Run ESLint
echo   npm run lint:fix     - Fix ESLint issues automatically
echo   npm run format       - Format code with Prettier
echo   npm run format:check - Check code formatting
echo   npm run type-check   - Run TypeScript type checking
echo.
echo 🔧 Git hooks are now active:
echo   - pre-commit: Runs lint-staged (ESLint + Prettier)
echo   - commit-msg: Validates commit messages
echo   - pre-push: Runs format check, lint, and build
echo.
echo 💡 Commit message format:
echo   feat: add new feature
echo   fix: fix bug
echo   docs: update documentation
echo   style: formatting changes
echo   refactor: code refactoring
echo   perf: performance improvements
echo   test: add or update tests
echo   chore: maintenance tasks
echo   ci: CI/CD changes
echo   build: build system changes
echo   revert: revert previous commit
