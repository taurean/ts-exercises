import { describe, expect, test } from "vitest";
import { disemvowel } from "../../src/intro/challenge12";

describe("Challenge 12", () => {
    test("remove vowels from a string", () => {
        expect(disemvowel("CodeSmith")).toBe("CdSmth");
        expect(disemvowel("BANANA")).toBe("BNN");
        expect(disemvowel("hello world")).toBe("hll wrld");
    });
});
