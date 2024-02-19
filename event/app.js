// const button = document.querySelector('#clickme');

// button.onclick = function () {
// 	console.log('You clicked me');
// };

// const scream = () => {
// 	console.log('Dont touch me');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', stepSatu);
// eventbtn.addEventListener('click', stepDua);

// function stepSatu() {
// 	console.log('step satu');
// }

// function stepDua() {
// 	console.log('step dua');
// }

// // eventbtn.onclick = stepSatu;
// // eventbtn.onclick = stepDua;

// const button = document.querySelector("#clickMe");
// const button = document.querySelector("h1");
// button.onclick = () => console.log("Click MEEE");

// button.onmouseover = () => console.log("dont touch me");

// const eventbtn = document.querySelector("#eventbtn");
// eventbtn.addEventListener("click", () => step1());
// eventbtn.addEventListener("click", () => step2());

// function step1() {
//   console.log("Step 1");
// }
// function step2() {
//   console.log("Step 2");
// }

// eventbtn.onclick = step1();

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");

// button.addEventListener("click", () => {
//   const newColor = generateRandomColor();
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// });

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  //   rgb(255, 255, 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}
const headings = document.querySelectorAll("h1");
for (let heading of headings) {
  heading.addEventListener("click", colorize);
}
function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}
