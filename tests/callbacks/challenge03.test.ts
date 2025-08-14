import { describe, expect, test } from "vitest";
import { addTwo } from "../../src/callbacks/challenge01";
import { map } from "../../src/callbacks/challenge03";

describe("callbacks, challenge 3", () => {
    test("convert one array into a new array using function in secondary property", () => {
        expect(map([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5]);
    });
});
