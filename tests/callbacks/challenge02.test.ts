import { describe, expect, test } from "vitest";
import { addS } from "../../src/callbacks/challenge02";

describe("callbacks, challenge 3", () => {
    test("add S to word", () => {
        expect(addS("pizza")).toBe("pizzas");
        expect(addS("bagel")).toBe("bagels");
    });
});
