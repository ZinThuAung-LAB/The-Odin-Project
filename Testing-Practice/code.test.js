import { capitalize } from "./code.js";

describe("capitalize", () => {
  test("capitalize the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("works with already capitalized strings", () => {
    expect(capitalize("World")).toBe("World");
  });

  test("handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});
