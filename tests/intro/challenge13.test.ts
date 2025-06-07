import { describe, expect, test } from "vitest";
import { divisibleByFivePairSum } from "../../src/intro/challenge13";

describe("Challenge 13", () => {
    test("", () => {
        expect(divisibleByFivePairSum([1, 5, 2, 0, 4])).toEqual([
            [0, 4],
            [1, 3],
        ]);
        expect(divisibleByFivePairSum([13, 22, 8, -3, 12])).toEqual([
            [0, 1],
            [0, 3],
            [0, 4],
            [1, 2],
            [2, 3],
            [2, 4],
        ]);
    });
});
