// Tantangan Coding (19/366)
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// function sumMix(x) {
//   return x.reduce((acc, curr) => acc + parseInt(curr), 0);
// }
function sumMix(x) {
  //   return x.reduce((acc, curr) => acc + parseInt(curr), 0);
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    // total += parseInt(x[i]);
    total += +x[i];
  }
  return total;
}
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
