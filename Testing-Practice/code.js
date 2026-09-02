export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  divide: (a, b) => (b === 0 ? Infinity : a / b),
  multiply: (a, b) => a * b,
};

export function caesarCipher(str, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26;

  return str
    .split("")
    .map((char) => shiftChar(char, normalizedShift))
    .join("");
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }

  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }

  return char;
}

export function analyzeArray(arr) {
  if (!arr || arr.length === 0) return null;

  const sum = arr.reduce((acc, current) => acc + current, 0);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = sum / arr.length;

  return { average, max, min, length: arr.length };
}
