import { describe, expect, test } from "vitest";
import { lastLetter } from "../../src/intro/challenge3";

describe("challenge 3", () => {
    test("return the last character/letter of a word", () => {
        expect(lastLetter("hello")).toBe("o");
        expect(lastLetter("goodbye!")).toBe("!");
        expect(lastLetter("ZeltoiD")).toBe("D");
    });
});
