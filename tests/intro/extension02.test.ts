import { describe, expect, test } from "vitest";
import { objectBuilder } from "../../src/intro/extension02";

describe("Extension 2", () => {
    test("transform a number into an object whose keys are 0 up to the input number with values are that number * 5", () => {
        expect(objectBuilder(4)).toEqual({ 0: 0, 1: 5, 2: 10, 3: 15, 4: 20 });
        expect(objectBuilder(0)).toEqual({ 0: 0 });
    });
});
