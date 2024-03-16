// Tantangan Coding (20/366)
// https://codewars.com/kata/5aa736a455f906981800360d
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

//   //   return dish[dish.length - 1];
// }
function feast(beast, dish) {
  return beast.charAt(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
}
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
