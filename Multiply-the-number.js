// function multiply(number) {
//   const num = Math.abs(number).toString().length;
//   return number * 5 ** num;
// }

const multiply = (number) => number * 5 ** Math.abs(number).toString().length;
console.log(multiply(15));
