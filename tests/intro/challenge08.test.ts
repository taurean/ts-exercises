import { describe, test, expect } from "vitest";
import { range } from "../../src/intro/challenge08";

describe("Challenge 8", () => {
    test("return an array of numbers between the two param values", () => {
        expect(range(1, 4)).toEqual([1, 2, 3, 4]);
        expect(range(4, 2)).toEqual([]);
    });
});
