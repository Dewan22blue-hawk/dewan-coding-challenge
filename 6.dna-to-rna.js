// Hari ke 6
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U');
//   }
  
//   const DNAtoRNA=(dna) => dna.replace(/T/g, 'U')
 
// versi bar bar

// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i =0; i < dna.length; i++) {
//         // if (dna[i] === 'T' || dna[i]==='t') {
            
//         //     rna += 'U';
//         // } else{

//         //     rna += dna[i];
//         // }
        
//         // versi ternary utk mengganti if else
//         rna += (dna[i] === 'T') ? 'U' : dna[i]
// }
// return rna
// }


// function DNAtoRNA(dna) {

// return dna.split('').map((el)=>(el === 'T' ? 'U' : el)).join('')
// }

// menggunakan regex

// const DNAtoRNA = (dna)=> dna.replace(/T/g, 'U')
// const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');


const DNAtoRNA = (dna)=> dna.split('T').join('U')


console.log(DNAtoRNA("GCTTATTT"))