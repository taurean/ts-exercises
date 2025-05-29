import { describe, expect, test } from "vitest";
import { buildGreeting } from "../../src/intro/challenge4";

describe("challenge 4", () => {
    test("return greeting depending on time of day", () => {
        expect(buildGreeting(8, "Maggie")).toBe("Good Morning, Maggie!");
        expect(buildGreeting(12, "John")).toBe("Good Afternoon, John!");
        expect(buildGreeting(22, "Stacey")).toBe("Good Evening, Stacey!");
        expect(buildGreeting(31, "Derrick")).toBe(
            "That's not a real time, Derrick. Maybe you need some sleep!",
        );
    });
});
