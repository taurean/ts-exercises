import { describe, expect, test } from "vitest";
import { secretCipher } from "../../src/intro/extension03";

describe("Extension 3", () => {
    test("convert an input sentence to a cipher using the second arg character", () => {
        expect(
            secretCipher("lqq me on flcebzzk", {
                l: "a",
                q: "d",
                z: "o",
            }),
        ).toBe("add me on facebook");
        expect(
            secretCipher("where are you???", {
                v: "l",
                "?": "!",
            }),
        ).toBe("where are you!!!");

        expect(
            secretCipher("twmce", {
                m: "n",
                t: "d",
                w: "a",
            }),
        ).toBe("dance");
    });
});
