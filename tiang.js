// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
function pillars(numPill, dist, width) {
  if (numPill < 2) return 0;
  return (numPill - 1) * dist * 100;
}
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));
