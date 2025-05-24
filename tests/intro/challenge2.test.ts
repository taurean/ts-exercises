import { describe, expect, test } from "vitest";
import { buildSentence } from "../../src/intro/challenge2";

describe("challenge 2", () => {
    test("adds three words together with punctuation and capitalization of the first letter", () => {
        expect(buildSentence("coding", "is", "awesome")).toBe(
            "Coding is awesome.",
        );

        expect(buildSentence("we're", "number", "1")).toBe("We're number 1.");
    });
});
