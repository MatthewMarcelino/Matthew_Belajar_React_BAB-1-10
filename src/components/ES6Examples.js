// Bab 2 — ES6 untuk React
export const add = (a, b) => a + b; // arrow function

export const person = { name: "Matthew", age: 17 };

// destructuring
export function greet({ name }) {
  return `Hello, ${name}!`;
}

// spread / rest
export function mergeAndSum(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged.reduce((s, n) => s + n, 0);
}

export function pickTitle({ title = "Untitled" } = {}) {
  return title;
}