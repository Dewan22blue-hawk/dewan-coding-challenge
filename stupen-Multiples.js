// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// function solution(number) {

// }

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let multiplesSum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesSum += i;
    }
  }

  return multiplesSum;
}

console.log();
