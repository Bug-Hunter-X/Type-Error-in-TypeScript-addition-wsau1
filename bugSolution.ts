function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both inputs must be numbers or parsable strings.');
  }
  return numA + numB;
}

let result = add(1, 2); // Correct: 3
let result2 = addSafe(1, '2'); // Correct: 3
let result3 = addSafe('1', 2); // Correct: 3
let result4 = addSafe('abc', 2); // Throws an error
console.log(result, result2, result3); // 3 3 3