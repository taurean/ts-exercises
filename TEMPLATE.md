# Function and Test Templates

## Function Template

When creating a new function, use this template structure:

```typescript
// src/[category]/[functionName].ts

/**
 * [Function description]
 * 
 * @param {[type]} param1 - [Parameter description]
 * @param {[type]} param2 - [Parameter description]
 * @returns {[return type]} - [Return value description]
 */
export function functionName(param1: type, param2: type): returnType {
  // Your implementation here
}
```

## Test Template

When creating tests for your functions, use this template:

```typescript
// tests/[category]/[functionName].test.ts

import { describe, it, expect } from 'vitest';
import { functionName } from '../../src/[category]/[functionName]';

describe('functionName', () => {
  it('should [expected behavior]', () => {
    // Arrange
    const input1 = [value];
    const input2 = [value];
    const expected = [expected result];
    
    // Act
    const result = functionName(input1, input2);
    
    // Assert
    expect(result).toEqual(expected);
  });
  
  it('should [another expected behavior]', () => {
    // Add more test cases
  });
});
```

## Example Function for "Intro to JavaScript" Challenge

For each of the 15 challenges and 4 extensions in the Intro category, create a separate file like:

```
src/intro/challenge1.ts
src/intro/challenge2.ts
...
src/intro/extension1.ts
...
```

With corresponding test files:

```
tests/intro/challenge1.test.ts
tests/intro/challenge2.test.ts
...
tests/intro/extension1.test.ts
...
```