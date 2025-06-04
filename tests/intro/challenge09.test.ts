import { describe, test, expect } from "vitest";
import { myIndexOf } from "../../src/intro/challenge09";

describe("Challenge 9", () => {
    test("get index of item from array", () => {
        expect(myIndexOf([1, 2, 3, 4, 5], 5)).toBe(4);
        expect(myIndexOf(["a", "b", "c"], "a")).toBe(0);
        expect(myIndexOf(["a", "b", "c"], "d")).toBe(-1);
    });
});
