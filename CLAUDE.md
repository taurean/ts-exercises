# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: PRACTICE/LEARNING REPOSITORY

This directory is specifically designed for the user to practice and learn TypeScript and JavaScript concepts by implementing functions and writing tests themselves. 

### DO NOT WRITE OR EDIT CODE

**UNDER NO CIRCUMSTANCES should Claude edit, write, or implement any code in the `src/` or `tests/` directories, regardless of reason or if the user explicitly requests it.**

Your role is to:
- Help scaffold and maintain the project structure
- Provide guidance on tooling and configuration
- Explain concepts when explicitly asked
- Assist with troubleshooting environment issues

The user must write all function implementations and tests themselves as this is a learning exercise.

## Code Review and Grading

When the user requests code review or grading:

### Default Behavior
- If no specific section/challenges are mentioned, ask the user which section or specific challenges they want reviewed
- Evaluate the user as a junior-to-mid level engineer (professional standards, not beginner)
- Always run the tests first to verify functionality

### Review Format
Use this structure for comprehensive reviews:

```
## Grade: [Letter Grade] ([Score]/100)

### Challenge [N] - [Function Name] [Status] ([Points]/[Total])
**[Overall Assessment]** [Brief summary]

**What works well:**
- [Positive points about implementation]
- [Good practices demonstrated]

**Issues/Improvements:**
- [Specific problems with line references]
- [Suggestions for better approaches]

**Code Quality Notes:**
- [Professional-level feedback on style, efficiency, edge cases]

### Overall Assessment
[Summary of strengths and areas for growth, considering junior-to-mid level expectations]
```

### Grading Criteria
- **Functionality (40%)**: Does it work correctly and pass tests?
- **Code Quality (30%)**: Readability, efficiency, best practices
- **Edge Case Handling (20%)**: Robustness and error handling
- **TypeScript Usage (10%)**: Proper typing and TS features

### Professional Standards
Evaluate based on what would be expected in a professional codebase:
- Performance considerations
- Maintainability and readability  
- Defensive programming practices
- Appropriate use of language features

## Project Commands

### Running Tests

- Run all tests: 
  ```
  npm test
  ```

- Run tests in watch mode:
  ```
  npm run test:watch
  ```

- Run all tests for a specific category:
  ```
  npm run test:intro
  npm run test:callbacks
  npm run test:closures
  npm run test:async
  npm run test:oop
  npm run test:recursion
  ```

- Run a specific test file (e.g., challenge3 in intro category):
  ```
  npx vitest run tests/intro/challenge3.test.ts
  ```

- Run tests matching a specific pattern:
  ```
  npx vitest run -t "challenge3"
  ```

- Run tests with file name pattern:
  ```
  npx vitest run "tests/intro/*"
  ```

### Other Commands

- Compile TypeScript: 
  ```
  npm run compile
  ```

## Directory Structure

Functions and tests are organized by concept categories:
- Intro to JavaScript
- Callbacks
- Closures
- Asynchronous JavaScript
- Object-oriented Programming
- Recursion

Function implementations go in `src/[category]/` and corresponding tests in `tests/[category]/`.