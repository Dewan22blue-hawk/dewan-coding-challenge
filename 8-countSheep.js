// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// 8/366

// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i + " Sheep...";
// result += `${i} Sheep...`;
//   }
//   return result;
// };

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`);

console.log(countSheep(3));
