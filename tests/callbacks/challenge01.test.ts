import { describe, expect, test } from "vitest";
import { addTwo } from "../../src/callbacks/challenge01";

describe("challenge 1", () => {
    test("accept one input and add 2 to it", () => {
        expect(addTwo(3)).toBe(5);
        expect(addTwo(10)).toBe(12);
    });
});
