// Tantangan Coding (18/366)
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function greet (name, owner) {
//     if (name === owner) {
//         return "Hello Boss"
//     } else{
//         return "Hello guest"
//     }
//   }
function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
  }

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))