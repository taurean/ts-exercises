import { describe, test, expect } from "vitest";
import { unique } from "../../src/intro/challenge10";

describe("Challenge 10", () => {
    test("deduplicate values from an array, return new array", () => {
        expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
        expect(unique(["a", "a", "c", "aa", "b", "b"])).toEqual([
            "a",
            "c",
            "aa",
            "b",
        ]);
    });
});
