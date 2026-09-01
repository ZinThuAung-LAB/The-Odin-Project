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

