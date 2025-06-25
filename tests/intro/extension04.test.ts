import { describe, expect, test } from "vitest";
import { passingStudents } from "../../src/intro/extension04";

const students = [
    {
        name: "Marco",
        id: 12345,
        grades: [
            { id: 0, score: 65 },
            { id: 1, score: 75 },
            { id: 2, score: 85 },
        ],
    },
    {
        name: "Donna",
        id: 55555,
        grades: [
            { id: 0, score: 100 },
            { id: 1, score: 100 },
            { id: 2, score: 100 },
        ],
    },
    {
        name: "Jukay",
        id: 94110,
        grades: [
            { id: 0, score: 65 },
            { id: 1, score: 60 },
            { id: 2, score: 65 },
        ],
    },
];

describe("Extension 4", () => {
    test("return an array of students who have an average grade of at least 70", () => {
        expect(passingStudents(students)).toEqual(["Marco", "Donna"]);
    });
});
