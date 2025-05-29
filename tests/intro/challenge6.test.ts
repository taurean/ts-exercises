import { describe, expect, test } from "vitest";
import { letterExists } from "../../src/intro/challenge6";

describe("challenge 6", () => {
    test("returns true or false depending on if letter exists", () => {
        expect(letterExists("superman", "e")).toBe(true);
        expect(letterExists("starship", "S")).toBe(false);
        expect(letterExists("th1s", "1")).toBe(true);
        expect(letterExists("he!lo", "!")).toBe(true);
    });
});
