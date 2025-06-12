import { describe, expect, test } from "vitest";
import { highestScore } from "../../src/intro/challenge14";

var students = [
    { name: "Will Sentance", id: 128, score: -42 },
    { name: "Jamie Bradshaw", id: 32, score: 57 },
    { name: "Lisa Simpson", id: 2, score: 99 },
    { name: "Luke Skywalker", id: 256, score: 94 },
];

describe("Challenge 14", () => {
    test("return highest student score", () => {
        expect(highestScore(students)).toBe("LS2");
    });
});
