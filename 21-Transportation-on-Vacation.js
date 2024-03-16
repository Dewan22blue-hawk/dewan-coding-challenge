// Transportation on Vacation | Tantangan Coding (21/366)
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// function rentalCarCost(d) {
//     discount = 0
//     if (d >=3) {
//         discount = 20
//     } 
//     if (d >= 7) {
//         discount = 50
//     }
//     return d * 40 - discount
    
//   }
function rentalCarCost(d) {
    // discount = 0
    // if (d >=3) {
    //     discount = 20
    // } 
    // if (d >= 7) {
    //     discount = 50
    // }
    // return d * 40 - discount
    return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)
  }
console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(4))
console.log(rentalCarCost(6))
console.log(rentalCarCost(7))