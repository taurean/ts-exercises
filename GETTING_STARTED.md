# Getting Started

This guide will help you get started with your JavaScript/TypeScript practice exercises.

## Writing Your First Function and Test

### 1. Choose a Category

Start by deciding which category you want to work on:
1. [Intro to JavaScript](http://csbin.io/jsep)
2. [Callbacks](http://csbin.io/callbacks)
3. [Closures](http://csbin.io/closures)
4. [Asynchronous JavaScript](http://csbin.io/async)
5. [Object-oriented Programming](http://csbin.io/oop)
6. [Recursion](http://csbin.io/recursion)

### 2. Create Your Function File

For example, if you're working on the first challenge in the "Intro" category:

1. Create a file at `src/intro/challenge1.ts` and copy over the original challenge description as a comment.

2. Implement your function:

```typescript
// src/intro/challenge1.ts

/**
 * Your function description
 */
export function myFunction(param1: type, param2: type): returnType {
  // Your implementation
}
```

### 3. Create a Test File

1. Create a corresponding test file at `tests/intro/challenge1.test.ts`
2. Write multiple tests for the same function, based on the console.logs and checks from csbin:

```typescript
// tests/intro/challenge1.test.ts

import { describe, it, expect } from 'vitest';
import { myFunction } from '../../src/intro/challenge1';

describe('challenge1', () => {
  it('should work with basic inputs', () => {
    // Arrange
    const input1 = 'value';
    const input2 = 'value';
    const expected = 'expected result';

    // Act
    const result = myFunction(input1, input2);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle edge case X', () => {
    // Test edge case
  });

  it('should handle scenario Y', () => {
    // Test another scenario
  });

  // Add more test cases as needed
});
```

### 4. Run Your Test

```bash
# Run just your test
npx vitest run tests/intro/challenge1.test.ts

# Run in watch mode
npx vitest tests/intro/challenge1.test.ts
```

## Managing Dependencies Between Challenges

When a challenge depends on a function from a previous challenge:

### Option 1: Import from the other challenge file

```typescript
// src/intro/challenge3.ts
import { functionFromChallenge2 } from './challenge2';

export function challenge3Function() {
  // Use functionFromChallenge2 here
  return functionFromChallenge2(...);
}
```

### Option 2: Create a utils file for shared functions

```typescript
// src/intro/utils.ts
export function commonUtility() {
  // Implementation
}

// src/intro/challenge2.ts
import { commonUtility } from './utils';

export function challenge2Function() {
  return commonUtility(...);
}

// src/intro/challenge3.ts
import { commonUtility } from './utils';

export function challenge3Function() {
  return commonUtility(...);
}
```

## Testing Dependencies

When testing functions that depend on other functions:

```typescript
// tests/intro/challenge3.test.ts
import { describe, it, expect } from 'vitest';
import { challenge3Function } from '../../src/intro/challenge3';
import { functionFromChallenge2 } from '../../src/intro/challenge2';

describe('challenge3Function', () => {
  it('should correctly use functionFromChallenge2', () => {
    // You can use both functions in your test
    const result = challenge3Function();
    const expected = functionFromChallenge2(...);

    expect(result).toEqual(expected);
  });
});
```

## Naming Conventions

- For specific numbered challenges:
  - `src/intro/challenge1.ts`, `src/intro/challenge2.ts`, etc.
  - `tests/intro/challenge1.test.ts`, `tests/intro/challenge2.test.ts`, etc.

- For extensions:
  - `src/intro/extension1.ts`, `src/intro/extension2.ts`, etc.
  - `tests/intro/extension1.test.ts`, `tests/intro/extension2.test.ts`, etc.

## Tips for Test Writing

1. Start with simple test cases
2. Include edge cases (empty arrays, negative numbers, etc.)
3. Use descriptive test names that explain the behavior being tested
4. Follow the Arrange-Act-Assert pattern for clarity
5. Group related tests with nested describe blocks
6. Write multiple tests for each function to cover different scenarios

## Common Vitest Assertions

```typescript
expect(value).toBe(expected)            // Strict equality (===)
expect(value).toEqual(expected)         // Deep equality
expect(value).toBeTruthy()              // Checks if value is truthy
expect(value).toBeFalsy()               // Checks if value is falsy
expect(array).toContain(item)           // Checks if array contains item
expect(object).toHaveProperty('key')    // Checks if object has property
expect(fn).toThrow()                    // Checks if function throws
```
