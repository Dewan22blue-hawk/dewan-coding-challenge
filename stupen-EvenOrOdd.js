// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
  let num = number;
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");
console.log(evenOrOdd());
