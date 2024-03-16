// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(array) {
  //   return array.map((row) => row.join(",")).join("\\n");
  return array.join("\\n");
}

console.log(
  toCsvText([
    [-25, 21, 2, -33, 48],
    [30, 31, -32, 33, -34],
  ])
);
