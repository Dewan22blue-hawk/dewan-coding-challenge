// 14/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

function getGrade (...s) {
    // const average = (s1+s2+s3)/3 //caa manualnya
    const average = s.reduce((acc, cur)=>acc+cur)/s.length  //menggunakan method reduce
    // return average
    if (average < 60) {
        return 'F'
    } else if(average < 70){
        return 'D'
    } else if(average < 80){
        return 'C'
    } else if(average < 90){
        return 'B'
    } else {
        return 'A'
    }

  }

  console.log(getGrade(95,90,93))