// DEWAN CODERS CDING CHALLENGE
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript


// function grow(x) {
//     let result = x[0];
//     for(let i = 1;i<x.length;i++){
//         // result = result * x[i];
//         result  *= x[i];
//     }
//     return result;
// }

// menggunakan hair order function reduce
// function grow(x) {
// const result = x.reduce((acc, curr)=>{
//     return acc*curr;
// }, 1);
// return result
// }


// // meringkas atau one liner code
// function grow(x) {
// return x.reduce((acc, curr)=>acc*curr, 1);

// }

// menggunakan function expression
const grow = (x)=> x.reduce((acc, curr)=>acc*curr, 1);

console.log(grow([2, 2, 2, 2, 2, 2]))