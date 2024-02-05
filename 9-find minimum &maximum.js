// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// };

let max = function (list) {
  return Math.max.apply(null, list);
};

let min = function (list) {
  return Math.min.apply(null, list);
};
console.log(min([42, 54, 65, 87, 0]));
console.log(max([42, 54, 65, 87, 0]));
