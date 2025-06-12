import { describe, expect, test } from "vitest";
import { arrayBuilder } from "../../src/intro/extension01";

describe("Extension 1", () => {
    test("return an array filled with the appropriate number of elements", () => {
        expect(arrayBuilder({ cats: 2, dogs: 1 })).toEqual([
            "cats",
            "cats",
            "dogs",
        ]);
        expect(arrayBuilder({})).toEqual([]);
    });
});
