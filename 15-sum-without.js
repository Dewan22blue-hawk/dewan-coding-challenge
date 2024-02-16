// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(arr) {
  // Check for empty or single-element array
  //   if (!arr || !Array.isArray(arr) || arr.length <= 1) {
  //     return 0;
  //   }
  if (arr === null || arr.length <= 2) return 0;
  const sorted = arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }
  return result;
  //   // Find the minimum and maximum values in the array
  //   const minValue = Math.min(...arr);
  //   const maxValue = Math.max(...arr);

  //   // Sum all elements except the minimum and maximum
  //   const sum = arr.reduce((total, num) => (num !== minValue && num !== maxValue ? total + num : total), 0);

  //   return sum;
}

function sumArray(arr) {
  if (arr == null || arr.length <= 2) return 0;
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, cur) => acc + cur);
}
console.log(sumArray([]));
console.log(sumArray([6, 2, 1, 8, 10, 17]));
console.log(sumArray([-6, -20, -1, -10, -12]));
