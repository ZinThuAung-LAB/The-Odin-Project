import { capitalize, reverseString, calculator } from "./code.js";

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

describe("reverseString", () => {
  test("reverse a single word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverse multiple words with spaces and puntuation", () => {
    expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
  });
});

describe("calculator", () => {
  test("adds two number", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
});
