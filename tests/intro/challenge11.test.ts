import { describe, expect, test } from "vitest";
import { longestWord } from "../../src/intro/challenge11";

describe("Challenge 11", () => {
    test("return the longest word in a string", () => {
        expect(longestWord("my JavaScript is exceptional")).toBe("exceptional");
        expect(longestWord("hate having hungry hippos")).toBe("hippos");
        expect(longestWord("javascript")).toBe("javascript");
        expect(longestWord("")).toBe("");
    });
});
