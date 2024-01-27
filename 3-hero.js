// Hari ke 3
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDI2RGVLQmFad2ZpbHZ4emtndE9PaGNCcnhpd3xBQ3Jtc0ttYTZlbDZ0Z2dRSGZib0NsVEdKdHFrcWh5bzBubE9adDlGbTJhV2pDaVB0UWFXTEJiLXpjS3VlbDVoTlRfZHlIR3NFWEI1U2JaMEJDelVMRE5rS3c1QldMeFp2M0ZHNGFWSjU0M0NZSlhsc1dLbEpIQQ&q=https%3A%2F%2Fwww.codewars.com%2Fkata%2F59ca8246d751df55cc00014c&v=y2YEemIlSPo
// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// gunakan ternary
// function hero(bullets, dragons) {
//   //   return bullets / 2 >= dragons ? true : false;
//   return bullets / 2 >= dragons;
// }

// gunakan function expression
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 1));
