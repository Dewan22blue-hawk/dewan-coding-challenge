// DEWAN CODERS CDING CHALLENGE
// 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151


// function arrayPlusArray(arr1, arr2) {
//     let total= 0
//     for (let i = 0; i < arr1.length; i++) {
//         total += arr1[i]
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         total += arr2[i];
        
//     }
//     return total

//   }
  
//   function arrayPlusArray(arr1, arr2) {
//       let total= 0
//         for (let j = 0; j < arguments.length; j++) {
//             for (let k = 0; k < arguments[j].length; k++) {
//                 total += arguments[j][k]
//             }            
//         }
//       return total
  
//     }

// function arrayPlusArray(arr1, arr2) {
// let total = 0
// let array = [...arr1, ...arr2]
// for (let i = 0; i < array.length; i++) {
//     total += array[i];
    
// }
// return total
//         }
        
        function arrayPlusArray(arr1, arr2) {
        
        return [...arr1, ...arr2].reduce((acc, count)=> acc + count)
                }
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));