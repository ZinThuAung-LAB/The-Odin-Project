import { capitalize, reverseString, calculator, caesarCipher } from "./code.js";

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
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("substract two numbers", () => {
    expect(calculator.substract(5, 2)).toBe(3);
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });

  test("divides by 0", () => {
    expect(calculator.divide(12, 0)).toBe(Infinity);
  });
});

describe("caesarCipher", () => {
  test("shift basic lowercase characters", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
});
