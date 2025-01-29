# Type Error in TypeScript Addition

This repository demonstrates a common type error in TypeScript that occurs when attempting to add a number and a string.  The provided code includes a function `add` that is designed to add two numbers, but it is later called with a string as one of the arguments. This leads to a type error. A solution is included that demonstrates type guarding to address this issue.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler/editor.
3. Attempt to compile the code. You'll observe a type error related to incompatible types in the addition operation.