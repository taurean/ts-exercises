# TypeScript Function Practice Exercises

This repository contains practice exercises for learning and implementing functions in TypeScript. These exercises originally stem from CSBin, an exercise resource from Codesmith / CSX: https://csx.codesmith.io


## Categories

1. **Intro to JavaScript**
2. **Callbacks**
3. **Closures**
4. **Asynchronous JavaScript**
5. **Object-oriented Programming**
6. **Recursion**

## Directory Structure

```
/
├── src/
│   ├── intro/        # Intro to JavaScript functions
│   ├── callbacks/    # Callback functions
│   ├── closures/     # Closures
│   ├── async/        # Asynchronous JavaScript
│   ├── oop/          # Object-oriented Programming
│   └── recursion/    # Recursion
│
└── tests/
    ├── intro/        # Tests for Intro functions
    ├── callbacks/    # Tests for Callback functions
    ├── closures/     # Tests for Closures
    ├── async/        # Tests for Async functions
    ├── oop/          # Tests for OOP functions
    └── recursion/    # Tests for Recursion functions
```

## Writing Functions

When implementing a new function:

1. Create a new TypeScript file in the appropriate category folder in `src/`
2. Export your function(s) from this file
3. Create a corresponding test file in the `tests/` directory

Example file naming:

- For a challenge named "multiplyNumbers" in the Intro category:
  - Implementation: `src/intro/multiplyNumbers.ts`
  - Test: `tests/intro/multiplyNumbers.test.ts`

## Running Tests

- Run all tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Run category-specific tests:
  - `npm run test:intro`
  - `npm run test:callbacks`
  - `npm run test:closures`
  - `npm run test:async`
  - `npm run test:oop`
  - `npm run test:recursion`
