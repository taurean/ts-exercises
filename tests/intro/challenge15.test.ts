import { describe, expect, test } from "vitest";
import { leastCommonMultiple } from "../../src/intro/challenge15";

describe("Challenge 15", () => {
    test("return the lowest multiple of both inputs", () => {
        expect(leastCommonMultiple(2, 3)).toBe(6);
        expect(leastCommonMultiple(6, 10)).toBe(30);
        expect(leastCommonMultiple(24, 26)).toBe(312);
    });
});
