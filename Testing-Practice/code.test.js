import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./code.js";

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

  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves lettercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("leaves punctuation, spaces, and numbers unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("handles large shift factors", () => {
    expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
  });
});

describe("analyzeArray", () => {
  test("return correct analysis object for array of numbers", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      length: 6,
      min: 1,
      max: 8,
    });
  });

  test("handle array with a single element", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      length: 1,
      min: 5,
      max: 5,
    });
  });
});
