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