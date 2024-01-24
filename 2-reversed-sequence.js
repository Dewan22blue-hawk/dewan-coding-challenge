// DEWAN CODERS CDING CHALLENGE
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Menggunkan for dan cara junior
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//     result.push(i);
//   }

//   return result;
// };

// const reverseSeq = (n) =>
//   // return [...Array(n)]; //bisa untuk ganti array.fill()
//   Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();

const reverseSeq = (n) =>
  // return [...Array(n)]; //bisa untuk ganti array.fill()
  Array(n)
    .fill()
    .map((el, i) => n - i);
console.log(reverseSeq(5));
