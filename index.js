// ⛔️ Uncaught SyntaxError: Unexpected identifier

// EXAMPLE 1 - Make sure keywords are not misspelled and you don't have typos

let age = 30; //️ ✅ let (lowercase l)

class Person {
  // ✅ class (lowercase c)
}

function sum(a, b) {
  // ✅ function (lowercase f)
  return a + b;
}

const obj = {
  first: 'Bobby', // ✅ added missing comma
  last: 'Hadz',
};

var example = 'hello'; // ✅ var (lowercase v)

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use the correct syntax in for loops

// const arr = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   // ✅ bobby, hadz, com
//   console.log(arr[index]);
// }

// ------------------------------------------------------------------

// EXAMPLE 3 - Make sure you don't have missing commas

// const obj = {
//   first: 'Bobby',
//   last: 'Hadz',
// };
// console.log(obj);

// const arr = ['bobby', 'hadz', 'com'];
// console.log(arr);
