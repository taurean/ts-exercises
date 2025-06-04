import { describe, expect, test } from "vitest";
import { isPrime } from "../../src/intro/challenge07";

describe("Challenge 7", () => {
    test("return true or false depending on if the passed in number is a prime number", () => {
        expect(isPrime(-7)).toBe(false);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(15)).toBe(false);
    });
});
