// document.querySelector('button').addEventListener('click', (e) => {
// 	console.log(e);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
// 	switch (e.code) {
// 		case 'ArrowUp':
// 			console.log('Tombol Arah Atas');
// 			break;
// 		case 'ArrowDown':
// 			console.log('Tombol Arah Bawah');
// 			break;
// 		case 'ArrowLeft':
// 			console.log('Tombol Arah Kiri');
// 			break;
// 		case 'ArrowRight':
// 			console.log('Tombol Arah Kanan');
// 			break;
// 		default:
// 			console.log('diabaikan');
// 	}
// });

// // input.addEventListener('keyup', () => {
// // 	console.log('Tombol dirilis');
// // });

document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});
const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("tombol atas");
      break;
    case "ArrowDown":
      console.log("tombol bawah");
      break;
    case "ArrowRIght":
      console.log("tombol kanan");
      break;
    case "ArrowLeft":
      console.log("tombol kiri");
      break;

    default:
      console.log("Sorry Yee!");
      break;
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //   console.log(e);
  //   console.log("submited");
  e.preventDefault();
  console.log("submited form");
});

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
});
