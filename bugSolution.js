function foo(a, b) {
  // More robust null handling using optional chaining and nullish coalescing
  const aVal = a ?? 0; // Use 0 if a is null or undefined
  const bVal = b ?? 0; // Use 0 if b is null or undefined
  return aVal + bVal;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); // Output: 0