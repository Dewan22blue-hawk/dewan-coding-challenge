// hai ke 5
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft*mpg >= distanceToPump;


console.log(zeroFuel(50,25,2))